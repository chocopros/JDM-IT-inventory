const {DataTypes} = require('sequelize');
const db = require('../utils/database');
const Request = require('./request.models');
const Computers = require('./computers.models');

//> TABLE PIVOTE RELATIONS COMPUTERS-REQUEST
const RequestComputer = db.define('requestComputer', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    requestId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'request_id',
        references: {
            key: 'id',
            model: Request
        }
    },
    computerId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'computers_id',
        references: {
            key: 'id',
            model: Computers
        }
    }

});

module.exports = RequestComputer