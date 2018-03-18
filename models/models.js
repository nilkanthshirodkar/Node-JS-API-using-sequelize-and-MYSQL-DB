GLOBAL.Sequelize = require('sequelize');
GLOBAL.sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
	host: DB_HOST,
	//logging: false,
	dialect: 'mysql',
	pool: {
		max: 50,
		min: 0,
		idle: 10000
	}
});

// TABLES

GLOBAL.User = require('./User.js');
GLOBAL.recipe = require('./recipe.js');



 User.hasOne(recipe);
 recipe.belongsTo(User);