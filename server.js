import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { makeExecutableSchema } from "@graphql-tools/schema";
import cors from "cors";
import express from "express";
import { createServer } from "http";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./typeDefs.js";

const app = express();
const httpServer = createServer(app);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

const startServer = async () => {
  const PORT = 4000;

  await server.start();

  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  httpServer.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}/graphql`);
  });
};

startServer().catch((err) => {
  console.error("Failed to start server", err);
});