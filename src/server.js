import { Server, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.create("user", { id: 1, name: "Bob" });
      server.create("user", { id: 2, name: "Alice" });
    },

    routes() {
      this.namespace = "api";
      this.timing = 1000;

      this.get("/users", (schema) => {
        return schema.users.all();
      });

      this.post("/users", (schema, request) => {
        return schema.db.users.insert(request.requestBody);
      });
    },
  });

  return server;
}
