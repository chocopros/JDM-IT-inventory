const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const Status = db.define('status', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(10),
        allowNull:false
    }
},{
    timestamps: false
});

module.exports = Status