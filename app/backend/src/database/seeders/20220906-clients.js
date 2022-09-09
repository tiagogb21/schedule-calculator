module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "clients",
      [
        {
          client: "jose cliente",
          genre: "masculino",
          birthday: "04/08/2016",
          naturalness: "ouro fino",
          profession: "desenvolvedor",
          marital: "solteiro",
          cellphone: "(35)99999-9999",
          email: "client@gmail.com",
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("clients", null, {});
  },
};
