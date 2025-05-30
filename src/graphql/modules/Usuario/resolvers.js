const db = require("../../../db");
const { ApolloError } = require("apollo-server");

function geradorId(lista) {
  let novoId;

  let ultimo = lista[lista.length - 1];

  if (!ultimo) {
    novoId = 0;
  } else {
    novoId = ultimo.id;
  }

  return ++novoId;
}

module.exports = {
  User: {
    perfil(usuario) {
      return db.perfis.find((p) => p.id === usuario.perfil_id);
    },
  },

  Query: {
    usuario(obj, args) {
      return db.usuarios.find((db) => db.id === args.id);
    },

    users: () => db.usuarios,
  },

  Mutation: {
    criarUsuario(_, { data }) {
      const { email } = data;

      const usuarioExistente = db.usuarios.some((u) => u.email === email);

      if (usuarioExistente) {
        throw new ApolloError(
          `Usuário Existente ${data.nome}`,
          "USUARIO_EXISTENTE"
        );
      }

      const novoUser = {
        ...data,
        id: geradorId(db.usuarios),
        perfil_id: 2,
      };

      db.usuarios.push(novoUser);
      console.log(novoUser);

      return novoUser;
    },
  },
};
