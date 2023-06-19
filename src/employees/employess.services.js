//? DEPENDENCIES

const employeesControllers = require('./employees.controllers')

//! *** SERVICES ***

//> CREATE EMPLOYEE
const createEmployee = ( req, res ) => {
    const {firstName,lastName,age,email,password,teamId,positionId,computerId} = req.body
    if (firstName&&lastName&&age&&email&&password&&teamId&&positionId&&computerId) {
        employeesControllers.createNewEmployee({firstName,lastName,age,email,password,teamId,positionId,computerId})
            .then(r => res.status(201).json({message: `Employee: ${email} has Created`}))
            .catch(err => res.status(400).json(err))
    } else {
        res.status(400).json({
            message: `Fail Fields Register`,
            example: {
                "firstName": "pepito",
                "lastName": "perez",
                "age": 30,
                "email": "jperez@jdmgroupcompany.com",
                "password": "AcoountPassoword",
                "teamId": 1,
                "positionId": 1,
                "computerId": 1
            }
        });
    }
};

//> GET ALL EMPLOYEES
const getAllEmployees = ( req, res ) => {
    employeesControllers.getAllEmployees()
        .then(r => !r ? res.status(200).json({message: 'NO USERS REGISTERS'}) : res.status(200).json(r))
        .catch(err => {res.status(400).json({message: err.message})})
};

module.exports = {
    createEmployee,
    getAllEmployees
};