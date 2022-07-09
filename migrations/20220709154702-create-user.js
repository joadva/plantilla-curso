"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Users",
      {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
        },
        firstname: {
          type: Sequelize.TEXT,
        },
        lastname: {
          type: Sequelize.TEXT,
        },
        status: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
        phone: {
          type: Sequelize.TEXT,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        deletedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
