const { Sequelize } = require("sequelize");

// llena con tus datros de db -- databse name , username, password, host, dialeect
const sequelizeClient = new Sequelize("usuario", "root", "", {
  host: "127.0.0.1",
  dialect: "mariadb",
});

module.exports = sequelizeClient;
