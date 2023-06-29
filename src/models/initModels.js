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
const RequestComputer = require('./requestComputer.models');

const Webcams = require('./webcams.models');
const Accesories = require('./accesories.models');
const Earphones = require('./earphones.models');


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

    //RELATIONS COMPUTER-REQUEST
    Request.hasMany(RequestComputer);
    RequestComputer.belongsTo(Request);

    Computers.hasMany(RequestComputer);
    RequestComputer.belongsTo(Computers);

    //RELATIONS ACCESORIES-earphones-webcams
    Employees.hasOne(Accesories);
    Accesories.belongsTo(Employees);
    
    Earphones.hasOne(Accesories);
    Accesories.belongsTo(Earphones);

    Webcams.hasOne(Accesories);
    Accesories.belongsTo(Webcams);
    
};



module.exports = initModels;
