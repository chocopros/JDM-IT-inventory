const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const Webcams = db.define('webcams', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    serialNumber: {
        type: DataTypes.STRING(20),
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
    imgUrl: {
        field: 'img_url',
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Webcams;