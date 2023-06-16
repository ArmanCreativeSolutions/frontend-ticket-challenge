import { createServer, Model, RestSerializer } from 'miragejs';
import db from './db.json';

export function makeServer({ environment = 'test' } = {}) {
  const server = createServer({
    environment,

    models: {
      map: Model,
    },

    serializers: {
      application: RestSerializer,
    },

    routes() {
      this.namespace = 'api';

      this.get('/map', () => {
        return Object.keys(db.stadium.map);
      });

      this.get('/map/:map_id', (schema, request) => {
        const map_id = request.params.map_id;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return db.stadium.map[map_id].seats || [];
      });

      this.post('/map/:map_id/ticket', (schema, request) => {
        const requestBody = JSON.parse(request.requestBody);
        const map_id = request.params.map_id;
        const x = requestBody.x;
        const y = requestBody.y;

        // Check if the seat is available
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (db.stadium.map[map_id].seats[x][y] === 0) {
          // Reserve the seat
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          db.stadium.map[map_id].seats[x][y] = 1;

          // Update tickets in DB
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          db.tickets.push({ x, y, map_id });

          return { status: 'success' };
        } else {
          return { status: 'failed', message: 'Seat is already reserved.' };
        }
      });
    },
  });

  return server;
}
