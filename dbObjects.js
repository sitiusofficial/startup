const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  logging: false,
  storage: 'database.sqlite',
});

const products = require('./models/products.js')(sequelize, Sequelize.DataTypes);
const companies = require('./models/companies.js')(sequelize, Sequelize.DataTypes);
const users = require('./models/users.js')(sequelize, Sequelize.DataTypes);

module.exports = { sequelize, companies, users, products };
