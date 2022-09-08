module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "schedules",
      [
        {
          id: 1,
          createdBy: "professional",
          client: "user",
          value: "100",
          status: "pendente",
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("schedules", null, {});
  },
};
