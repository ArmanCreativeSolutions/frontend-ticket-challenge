/**
 * This file contains a MirageJs server setup for a React project.
 * MirageJs is used to mock a server-side environment for front-end applications.
 *
 * The `createServer` function from MirageJs is used to create a new server.
 * `Model` and `RestSerializer` are also imported from MirageJs to define the server's database schema and serialization style respectively.
 * `db` is a JSON database imported from a local file.
 * `generateRandomHash` is a utility function imported from a local file that generates a random hash, which is used as a unique identifier for tickets.
 *
 * @param {object} options - An object to configure the server. The only option used is `environment` which defaults to 'test'.
 *
 * @return {object} server - An instance of a MirageJs server.
 */

import { createServer, Model, RestSerializer } from 'miragejs';
import db from './db.json';
import { generateRandomHash } from '../utils/generateid';
import { Ticket } from '../types';

export function makeServer({ environment = 'test' } = {}) {
  const server = createServer({
    // The environment in which the server is running, default is 'test'.
    environment,

    // The models define the entities in our server's database. In this case, we only have 'map'.
    models: {
      map: Model,
    },

    // The serializers define how the server's response should be structured. In this case, we are using RestSerializer.
    serializers: {
      application: RestSerializer,
    },

    // Define the server's routes.
    routes() {
      // Set the namespace for the routes to 'api'.
      this.namespace = 'api';

      // GET route for '/map'. It returns the keys of the 'map' object in the 'stadium' object of our database.
      this.get('/map', () => {
        return Object.keys(db.stadium.map);
      });

      // GET route for '/map/:map_id'. It returns the 'seats' array of the map with the provided 'map_id'. If 'seats' is not defined, it returns an empty array.
      this.get('/map/:map_id', (schema, request) => {
        const map_id = request.params.map_id;
        const map = db.stadium.map as any;
        return map[map_id].seats || [];
      });

      // POST route for '/map/:map_id/ticket'. It reserves a seat in the map with the provided 'map_id' if it's available, and creates a ticket for it.
      this.post('/map/:map_id/ticket', (schema, request) => {
        // Parse the request body to get the coordinates of the seat to reserve.
        const requestBody = JSON.parse(request.requestBody);
        const map_id = request.params.map_id;
        const x = requestBody.x;
        const y = requestBody.y;
        const map = db.stadium.map as any;

        // Check if the seat is available. A seat is available if its value is 0.
        if (map[map_id].seats[x][y] === 0) {
          // If the seat is available, reserve it by setting its value to 1.
          map[map_id].seats[x][y] = 1;

          // Create a ticket for the reserved seat with a unique 'id', and the 'map_id' and coordinates of the seat.
          const ticket = { id: generateRandomHash(), x, y, map_id } as Ticket;

          // Add theticket to the 'tickets' array in the database.
          // eslint-disable-next-line
          // @ts-ignore
          db.tickets.push(ticket);

          // Return a success message with the created ticket.
          return { status: 'success', ticket: ticket };
        } else {
          // If the seat is already reserved, return a failure message.
          return { status: 'failed', message: 'Seat is already reserved.' };
        }
      });
    },
  });

  // Return the created server.
  return server;
}
