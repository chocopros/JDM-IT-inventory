const router = require('express').Router();

const monitorsServices = require('./monitors.services')


//! ASSIGNMENT MONITORS TO EMPLOYEE
router.post('/assignment', monitorsServices.createAsign)

//> ROUTE MONITORS
router.route('/')
    .get(monitorsServices.getAllMonitors)
    .post(monitorsServices.createMonitor)


module.exports = router