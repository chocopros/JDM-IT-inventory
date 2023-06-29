//? DEPENDENCIES
const {DataTypes} = require('sequelize');
const db = require('../utils/database');

//> TABLE POSITIONS
const Positions = db.define('positions', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    position: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description : {
        type: DataTypes.STRING(50),
        allowNull: true
    }
},{
    timestamps: false //! No createAt & updateAt
});

module.exports = Positions;