const {DataTypes} = require('sequelize');
const db = require('../utils/database');

//? MODELS IMPORTS
const References = require('./references.models');
const Status = require('./status.models');
const TypeSupport = require('./typeSupport.models');

// MODELS Request
const Request = db.define('request', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    typesSupportId: {
        field: 'type_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key: 'id',
            model: TypeSupport
        }
    },
    referenceId: {
        field: 'references_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key: 'id',
            model: References
        }
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    statusId: {
        field: 'status_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key: 'id',
            model: Status
        }
    }

});

module.exports = Request;
