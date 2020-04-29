import { Server, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      user: Model,
      job: Model,
    },

    seeds(server) {
      server.create("user", { id: 1, name: "Bob" });
      server.create("user", { id: 2, name: "Alice" });
      server.create("job", {
        id: 1,
        title: "Frontend developer - 2 years exp",
      });
    },

    routes() {
      this.namespace = "api";
      this.timing = 1000;

      this.get("/users", function(schema) {
        const users = schema.users.all();
        const json = this.serialize(users);

        return json;
      });

      this.get("/jobs");

      this.get("users/:id", (schema, request) => {
        let id = request.params.id;

        return schema.db.users.find(id);
      });

      this.post(
        "/users",
        (schema, request) => {
          return schema.db.users.insert(request.requestBody);
        },
        { timing: 500 }
      );
    },
  });

  return server;
}
