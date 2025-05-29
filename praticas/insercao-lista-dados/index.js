const { gql, ApolloServer } = require("apollo-server");

// Tipos Escalares

//   => Int
//   => Float
//   => String
//   => Boolean
//   => ID

const produtos = [
  {
    id: 1,
    nome: "Notebook",
    valor: 12350.99,
  },
  {
    id: 2,
    nome: "Monitor ThinkVision",
    valor: 1250.99,
  },
  {
    id: 3,
    nome: "Mouse Log Tech",
    valor: 100.5,
  },
];

const usuarios = [
  {
    id: 1,
    nome: "Ana",
    idade: 19,
    salario: 5890.3,
    ativo: false,
  },
  {
    id: 1,
    nome: "Joana",
    idade: 29,
    salario: 5198.3,
    ativo: true,
  },
  {
    id: 1,
    nome: "Helena",
    idade: 39,
    salario: 5413.3,
    ativo: false,
  },
];

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
    users: [User]
    products: [Product]
  }
`;

const resolvers = {
  Query: {
    users() {
      return usuarios;
    },

    products() {
      return produtos;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();
