import { createServer, Model, RestSerializer } from 'miragejs';

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

      this.get('/map', (schema) => {
        return ['m213', 'm654', 'm63', 'm6888'];
      });

      this.get('/map/:map_id', (schema, request) => {
        const map_id = request.params.map_id;
        // you can return different responses based on the map_id
        return [
          [0, 0, 1, 0],
          [0, 1, 0, 0],
          [1, 1, 1, 1],
          [1, 1, 1, 1],
        ];
      });

      this.post('/map/:map_id/ticket', (schema, request) => {
        const requestBody = JSON.parse(request.requestBody);
        // handle your request here
        return { status: 'success' };
      });
    },
  });

  return server;
}
