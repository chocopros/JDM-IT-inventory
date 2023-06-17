//? DEPENDENCIES
const {DataTypes} = require('sequelize');
const db = require('../utils/database');

//> TABLE TEAMS
const Teams = db.define('teams', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    nameTeam: {
        field: 'team_name',
        type: DataTypes.STRING(20),
        allowNull: false
    },
    description : {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

module.exports = Teams
