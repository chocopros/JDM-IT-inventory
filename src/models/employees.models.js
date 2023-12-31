const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const Teams = require('./teams.models');
const Positions = require('./positions.models');
const Computers = require('./computers.models');


const Employees = db.define('employees', {

    employeeId: {
        field: 'employee_id',
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        field: 'first_name',
        type: DataTypes.STRING(30),
        allowNull: false
    },
    lastName: {
        field: 'last_name',
        type: DataTypes.STRING(30),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
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
    },
    urlImage: {
        field: 'img_url',
        type: DataTypes.STRING,
        allowNull: true
    },
    teamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'teams_id',
        references: {
            key: 'id',
            model: Teams
        }
    },
    positionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'positions_id',
        references: {
            key: 'id',
            model: Positions
        }
    },
    computerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'computer_id',
        references: {
            key: 'id',
            model: Computers
        }
    },
    status: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    isValidated: {
        field: 'is_validated',
        type: DataTypes.BOOLEAN,
        allowNull: false   
    },
    role: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: 'user'
    }
   
});

module.exports = Employees