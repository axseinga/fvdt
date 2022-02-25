const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db", "user", "pass", {
    dialect: "sqlite",
    storage: "./test.sqlite",
});

module.exports = sequelize;
