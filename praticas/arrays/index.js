const { gql, ApolloServer } = require("apollo-server");

// Tipos Escalares

//   => Int
//   => Float
//   => String
//   => Boolean
//   => ID

const typeDefs = gql`
  type Query {
    idade: Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
    tecnologias: [String!]!
  }
`;

const resolvers = {
  Query: {
    idade() {
      return 18;
    },
    salario() {
      return 1490.95;
    },
    nome() {
      return "Ana Karoliny";
    },
    ativo() {
      return true;
    },
    id() {
      return 1234556;
    },
    tecnologias() {
      return [];
      // return ["GraphQL", "ReactJS", "CSS3", "Typescript", 8];
      // return [null, null];
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();
