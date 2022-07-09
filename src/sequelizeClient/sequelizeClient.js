const { Sequelize } = require("sequelize");

const sequelizeClient = new Sequelize("root", "username", "password", {
  host: "localhost",
  dialect: "mariadb",
});

module.exports = sequelizeClient;
