//> RELACIONES

//? DEPENDENCIES MODELS
const Teams = require('./teams.models');
const Positions = require('./positions.models');
const Employees = require('./employees.models');
const Computers = require('./computers.models');


const initModels = () => {
    

    Positions.hasOne(Employees);
    Employees.belongsTo(Positions);
   
    Teams.hasOne(Employees);
    Employees.belongsTo(Teams);

    Computers.hasOne(Employees);
    Employees.belongsTo(Computers);

    /*
    Positions.hasOne(Employees,{
        foreignKey: 'positions_employees'
    });
   
    Teams.hasOne(Employees,{
        foreignKey: 'teams_employees'
    });
    */
};

module.exports = initModels;
