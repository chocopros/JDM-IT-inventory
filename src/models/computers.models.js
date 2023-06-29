//? DEPENDENCIES
const {DataTypes} = require('sequelize');
const db = require('../utils/database');

//> TABLE COMPUTER
const Computers = db.define('computers', {
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
    processor: {
        type: DataTypes.STRING(33),
        allowNull: false
    },
    memoryRam: {
        field: 'memory_RAM',
        type: DataTypes.STRING(33),
        allowNull: false
    },
    hardDisk: {
        field: 'hard_disk',
        type: DataTypes.STRING(33),
        allowNull: false
    },
    videoCard: {
        field: 'video_card',
        type: DataTypes.STRING(33),
        allowNull: true
    },
    urlImage: {
        field: 'img_url',
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Computers