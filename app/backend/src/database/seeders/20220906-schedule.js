module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "schedules",
      [
        {
          id: 1,
          createdBy: 'secretary',
          client: 'joao',
          value: '100',
          status: 'pendente',
          date: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("schedules", null, {});
  },
};
