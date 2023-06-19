//? DEPENDENCIES
const positionsControllers = require('./positions.controllers');

//! ***SERVICES ***

const createNewPosition = ( req ,res ) => {
    const {position,description} = req.body;

    if (position && description) {
        positionsControllers.createNewPosition({position,description})
        .then(r => res.status(200).json({message: 'Position Created'}))
        .catch(err => res.status(400).json({message: err}))
    } else {
        res.status(400).json({
            messageError: 'Fails Fields Register',
            fields: {
                "position": "name of position",
                "description": "description of position"
            }
        })
    }

    
};

module.exports = {
    createNewPosition
}