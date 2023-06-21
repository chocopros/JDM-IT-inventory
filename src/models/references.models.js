const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const References = db.define('references', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    reference: {
        type: DataTypes.STRING(10),
        allowNull:false
    }
},{
    timestamps: false
});

module.exports = References