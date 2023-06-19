const router = require('express').Router()

const employeesServices = require('./employess.services')

router.get('/', employeesServices.getAllEmployees)

module.exports = router