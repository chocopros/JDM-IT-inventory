//? DEPENDENCIES
const positionsControllers = require('./positions.controllers');

//! ***SERVICES ***

const createNewPosition = ( req ,res ) => {
    const {position,description} = req.body;

    positionsControllers.createNewPosition({position,description})
        .then()
        .catch()
};