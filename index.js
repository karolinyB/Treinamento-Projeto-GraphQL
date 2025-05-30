const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./src/graphql");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (err) => {
    return {
      message: err.message,
      code: err.extensions?.code || "INTERNAL_SERVER_ERROR",
    };
  },
});

// Exibe a url do servidor
server.listen().then(({ url }) => console.log(url));
