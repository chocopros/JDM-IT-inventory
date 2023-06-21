const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const TypeSupport = db.define('typesSupport', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    support: {
        type: DataTypes.STRING(10),
        allowNull:false
    }
},{
    timestamps: false
});

module.exports = TypeSupport