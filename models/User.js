var User = sequelize.define('user', {
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
    password: {
		type: Sequelize.STRING(255),
		field: 'password',
		allowNull: true,
    },
    email: {
		type: Sequelize.STRING(255),
		field: 'email',
		allowNull: true,
    },
    phone: {
		type: Sequelize.STRING(255),
		field: 'phone',
		allowNull: true,
	}
}, {
    freezeTableName: true,
	indexes: []
}


);

module.exports = User;