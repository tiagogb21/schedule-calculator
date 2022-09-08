module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("clients", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      clientName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birthday: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      naturalness: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      profession: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      maritalStatus: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cellphone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("clients");
  },
};
