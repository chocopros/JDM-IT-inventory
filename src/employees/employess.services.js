//? DEPENDENCIES

const employeesControllers = require('./employees.controllers')

//! *** SERVICES ***

//> GET ALL EMPLOYEES
const getAllEmployees = ( req, res ) => {
    employeesControllers.getAllEmployees()
        .then(r => !r ? res.status(200).json({message: 'NO USERS REGISTERS'}) : res.status(200).json(r))
        .catch(err => {res.status(400).json({message: err.message})})
};

module.exports = {
    getAllEmployees
};