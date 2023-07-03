const router = require('express').Router();

const employeesServices = require('./employess.services');

router.route('/')
    .get(employeesServices.getAllEmployees)
    .post(employeesServices.createEmployee);

module.exports = router;