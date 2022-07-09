const { DataTypes } = require("Sequelize");
const sequelizeClient = require("../src/sequelizeClient/sequelizeClient");

const Users = sequelizeClient.define(
  "Users",
  {
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    phone: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    charset: "utf8",
    collate: "utf8_general_ci",
    sequelizeClient,
    tableName: "Users",
  }
);

module.exports.Users = Users;
