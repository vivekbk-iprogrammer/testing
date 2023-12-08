const { DataTypes } = require('sequelize');
const Sequelize = require('../config/config');

const User = Sequelize.define('User', {
    userId: {  
        type: DataTypes.INTEGER,  
        primaryKey: true,
        autoIncrement: true,  
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    }
    
}, {
    tableName: 'userinfo',
});

module.exports = User;
