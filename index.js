const { gql, ApolloServer } = require("apollo-server");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Exibe a url do servidor
server.listen().then(({ url }) => console.log(url));
