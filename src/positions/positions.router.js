const router = require('express').Router();

const positionsServices = require('./positions.services');

//> ROUTE POSITIONS

router.route('/')
    .get(positionsServices.getAllPositions)
    .post(positionsServices.createNewPosition)

module.exports = router;