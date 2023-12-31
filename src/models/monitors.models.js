//? DEPENDENCIES
const {DataTypes} = require('sequelize');
const db = require('../utils/database');

//> TABLE MONITOR
const Monitors = db.define('monitors', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    isActive: {
        field: 'is_active',
        type: DataTypes.BOOLEAN,
        allowNull: false   
    },
    serialNumber: {
        field: 'serial_number',
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    brand: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    model: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    screenSize: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    urlImage: {
        field: 'img_url',
        type: DataTypes.STRING,
        allowNull: true
    },
});

module.exports = Monitors