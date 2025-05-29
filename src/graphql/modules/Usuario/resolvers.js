const db = require("../../../db");

module.exports = {
  User: {
    perfil(usuario) {
      return db.perfis.find((p) => p.id === usuario.perfil);
    },
  },

  Query: {
    usuario(obj, args) {
      return db.usuarios.find((db) => db.id === args.id);
    },

    users: () => db.usuarios,
  },
};
