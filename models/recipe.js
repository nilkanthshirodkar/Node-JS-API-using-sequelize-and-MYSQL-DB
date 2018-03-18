var recipe = sequelize.define('recipe', {
    id: {
        type: Sequelize.BIGINT,
        field: 'id',
        primaryKey: true,
		autoIncrement: true,
		allowNull: false,
    },
    name: {
		type: Sequelize.STRING(255),
		field: 'name',
		allowNull: true,
    },
    image: {
		type: Sequelize.STRING(255),
		field: 'image',
		allowNull: true,
    },
    ingredient: {
		type: Sequelize.STRING(255),
		field: 'ingredient',
		allowNull: true,
    },
    description: {
		type: Sequelize.STRING(255),
		field: 'description',
        allowNull: true,
    }
    },
    {
        freezeTableName: true,
        indexes: []
    }
);

module.exports = recipe;