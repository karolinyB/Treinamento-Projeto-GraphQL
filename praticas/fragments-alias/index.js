const { gql, ApolloServer } = require("apollo-server");

// Tipos Escalares

//   => Int
//   => Float
//   => String
//   => Boolean
//   => ID

const db = {
  usuarios: [
    {
      id: 1,
      nome: "Ana",
      email: "aninha@gmail.com",
      telefone_fixo: "34 1234 5602",
      perfil: 1,
    },
    {
      id: 2,
      nome: "Joana",
      email: "joaninha@gmail.com",
      telefone_fixo: "34 1234 5129",
      perfil: 2,
    },
    {
      id: 3,
      nome: "Helena",
      email: "heleninha@gmail.com",
      telefone_fixo: "34 1234 5659",
      perfil: 2,
    },
  ],

  perfis: [
    { id: 1, tipo: "ADMIN" },
    { id: 2, tipo: "COMUM" },
  ],
};

const typeDefs = gql`
  type Perfil {
    id: Int
    tipo: String
  }

  type User {
    id: Int
    nome: String
    email: String
    telefone: String
    perfil: Perfil
  }

  type Query {
    usuario(id: Int): User
    perfis: [Perfil]
    users: [User]
  }
`;

const resolvers = {
  User: {
    perfil(usuario) {
      return db.perfis.find((p) => p.id === usuario.perfil);
    },
  },

  Query: {
    usuario(obj, args) {
      return db.usuarios.find((db) => db.id === args.id);
    },

    perfis() {
      return db.perfis;
    },

    users: () => db.usuarios,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();
