const router = require('express').Router();

const computersServices = require('./computers.services');


//> ROUTE COMPUTERS
router.route('/')
    .get(computersServices.getAllComputers)
    .post(computersServices.createComputer)

module.exports = router