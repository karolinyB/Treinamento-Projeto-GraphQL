const { gql, ApolloServer } = require("apollo-server");

// Tipos Escalares

//   => Int
//   => Float
//   => String
//   => Boolean
//   => ID

const typeDefs = gql`
  type Product {
    id: ID
    nome: String
    valor: Float
  }

  type User {
    idade: Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
    tecnologias: [String!]!
  }

  type Query {
    user: User
    product: Product
  }
`;

const resolvers = {
  Query: {
    user() {
      return {
        id: 1,
        nome: "Ana",
        idade: 19,
        salario: 50000.3,
        ativo: false,
      };
    },

    product() {
      return {
        id: 1,
        nome: "Notebook",
        valor: 12350.99,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();
