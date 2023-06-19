const {DataTypes} = require('sequelize');
const db = require('../utils/database');
const Monitors = require('./monitors.models');
const Employees = require('./employees.models');

const MoniEmployee = db.define('monitoremployee', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    monitorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'monitors_id',
        references: {
            key: 'id',
            model: Monitors
        }
    },
    employeeEmployeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'employees_id',
        references: {
            key: 'employee_id',
            model: Employees
        }
    }

});

module.exports = MoniEmployee