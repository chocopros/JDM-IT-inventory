//? DEPENDENCIES
const {DataTypes} = require('sequelize');
const db = require('../utils/database');

//Relations
const Employees = require('./employees.models');
const Earphones = require('./earphones.models');
const Webcams = require('./webcams.models');

//> TABLE ACCESORIES
const Accesories = db.define('accesories', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    employeeEmployeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'employee_id',
        references: {
            key: 'employee_id',
            model: Employees
        }
    },
    earphoneId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            key: 'id',
            model: Earphones
        }  
    },
    webcamId: {
        field: 'web_cam',
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            key: 'id',
            model: Webcams
        }   
    },
    others: {
        type: DataTypes.STRING(255),
        allowNull: true,
    }
});

module.exports = Accesories