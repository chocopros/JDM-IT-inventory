//? DEPENDENCIES

const Employees = require("../models/employees.models");
const Positions = require("../models/positions.models");
const Teams = require("../models/teams.models");

//CREATE NEW EMPLOYEE
const createNewEmployee = async (dataEmployee) => {
    return await Employees.create({
        firstName: dataEmployee.firstName,
        lastName: dataEmployee.lastName,
        age: dataEmployee.age,
        email: dataEmployee.email,
        password: dataEmployee.password,
        teamId: dataEmployee.teamId,
        positionId: dataEmployee.positionId,
        status: 'is_active',
        isValidated: true,
        role: 'normal'

    })
};

//GET ALL EMPLOYEES

const getAllEmployees = async () => {
    return await Employees.findAndCountAll({
        attributes: ['firstName','lastName','age','email','teamId','positionId'],
        include: [
            {
                model: Positions
            }
        ]
    })
};

module.exports = {
    createNewEmployee,
    getAllEmployees
};

//> *** TEST ***
/*
createNewEmployee({
    firstName: "jesus",
    lastName: "david",
    age: 29,
    email: "jarechider@jdmgroupcompany.com",
    password: "jesus27511",
    teamId: 1,
    positionId: 1,
    status: 'is_active',
    isValidated: true,
    role: 'normal'
}).then(r => console.log(r.dataValues))
.catch(err => console.log(err))
*/