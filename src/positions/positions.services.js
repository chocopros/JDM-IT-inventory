//? DEPENDENCIES
const positionsControllers = require('./positions.controllers');

//! ***SERVICES ***

//> CREATE NEW POSITION
const createNewPosition = ( req ,res ) => {
    const {position,description} = req.body;

    if (position && description) {
        positionsControllers.createNewPosition({position,description})
            .then(r => res.status(201).json(`Position= ${position} it's Created`))
            .catch(err => res.status(400).json({messageError: err}))
    } else {
        res.status(400).json({
            message: 'Fails Fields Register',
            values: {
                "position": "position name",
                "description": "Descriptions of teams"
            }
        });
    };
};

// GET ALL POSITIONS
const getAllPositions = ( req, res ) => {
    positionsControllers.getAllPositions()
        .then(r => {
            !r ? res.status(200).json({message: 'NO POSITIONS'}): res.status(200).json({Positions: r})
        })
        .catch(err => res.status(400).json({err}))
};

module.exports = {
    createNewPosition,
    getAllPositions
}