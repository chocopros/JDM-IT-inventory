//? DEPENDENCIES

const Computers = require("../models/computers.models");
const Employees = require("../models/employees.models");
const MoniEmployee = require("../models/monitorEmployee.models");
const Monitors = require("../models/monitors.models");
const Positions = require("../models/positions.models");
const Teams = require("../models/teams.models");
const Accesories = require('../models/accesories.models');
const Earphones = require("../models/earphones.models");
const Webcams = require("../models/webcams.models");

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
        computerId: dataEmployee.computerId,
        status: 'is_active',
        isValidated: true,
        role: 'normal'
    })
};

//GET ALL EMPLOYEES
const getAllEmployees = async () => {
    return await Employees.findAndCountAll({
        attributes: ['employeeId','firstName','lastName','age','email'],
        include: [
            {
                model: Positions
            },
            {
                model: Teams,
                attributes: ['id','nameTeam','description','email']
            },
            {
                model: Computers,
            },
            {
                model: MoniEmployee,
                attributes: ['id'],
                include:[
                    {
                        model: Monitors
                    }
                ]
            },
            {
                model: Accesories,
                attributes: ['id'],
                include:[
                    {
                        model: Earphones
                    },
                    {
                        model: Webcams
                    }
                ]
            }
            
        ]
    })
};

const getEmployeeByEmail = async(email) => {
    return await Employees.findOne({
        where: {
            email
        }
    })
};

module.exports = {
    createNewEmployee,
    getAllEmployees,
    getEmployeeByEmail
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