//? DEPENDENCIES
const Positions = require("../models/positions.models");

//> CREATE NEW POSITION
const createNewPosition = async (dataPosition) => {
    return await Positions.create({
        position: dataPosition.position,
        description: dataPosition.description
    })
};

//> GET ALL POSITIONS
const getAllPositions = async () => {
    return await Positions.findAll({
        attributes: ['id', 'position', 'description']
    });
};


module.exports = {
    createNewPosition,
    getAllPositions
};

