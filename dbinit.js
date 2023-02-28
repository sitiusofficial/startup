const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});

require('./models/companies.js')(sequelize, Sequelize.DataTypes);

const alter = process.argv.includes('--alter') || process.argv.includes('-a');

sequelize.sync({ alter }).then(async () => {
  console.log('Database synced');
  sequelize.close();
}).catch(console.error);