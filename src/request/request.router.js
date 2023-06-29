const router = require('express').Router();

//> Dependencies
const requestServices = require('./request.services')

router.route('/')
    .get(requestServices.getAllRequest)
    .post(requestServices.newRequest)

router.post('/assignment', requestServices.newAssignment)

module.exports = router