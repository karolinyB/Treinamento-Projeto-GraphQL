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
    id: 2,
    nome: "Joana",
    idade: 29,
    salario: 5198.3,
    ativo: true,
  },
  {
    id: 3,
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

    # Consultas
    usuario(id: Int, nome: String): User
    produtos(id: Int, nome: String): Product
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

    usuario(_, args) {
      const { id, nome } = args;

      if (id) return usuarios.find((usuario) => usuario.id === id) || {};

      return usuarios.find((usuario) => usuario.nome === nome) || {};
    },

    produtos(_, args) {
      const { id, nome } = args;

      if (id && nome) {
        produtos.find((produto) => produto.id === id);

        produtos.map((p) => {
          if (p.id === id) console.log(p.valor);
        });

        return produtos.find((produto) => produto.id === id);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();
