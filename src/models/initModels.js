//> RELACIONES

//? DEPENDENCIES MODELS
const Teams = require('./teams.models');
const Positions = require('./positions.models');
const Employees = require('./employees.models');
const Computers = require('./computers.models');
const MoniEmployee = require('./monitorEmployee.models');
const Monitors = require('./monitors.models');
const Request = require('./request.models');
const TypeSupport = require('./typeSupport.models');
const References = require('./references.models');
const Status = require('./status.models');


const initModels = () => {
    

    Positions.hasOne(Employees);
    Employees.belongsTo(Positions);
   
    Teams.hasOne(Employees);
    Employees.belongsTo(Teams);

    Computers.hasOne(Employees);
    Employees.belongsTo(Computers);

    //RELATIONS MONITORS-EMPLOYEES
    Employees.hasMany(MoniEmployee);
    MoniEmployee.belongsTo(Employees);

    Monitors.hasMany(MoniEmployee);
    MoniEmployee.belongsTo(Monitors);

    //RELACIONS REQUEST
    TypeSupport.hasOne(Request);
    Request.belongsTo(TypeSupport);

    References.hasOne(Request);
    Request.belongsTo(References);

    Status .hasOne(Request);
    Request.belongsTo(Status);


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
