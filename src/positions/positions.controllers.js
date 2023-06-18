//? DEPENDENCIES
const Positions = require("../models/positions.models");

//> CREATE NEW POSITION
const createNewPosition = async (dataPosition) => {
    return await Positions.create({
        position: dataPosition.position,
        description: dataPosition.description
    })
};

module.exports = {
    createNewPosition
};


/* ***TEST ***/
/*
createNewPosition({
    position: "Director IT",
    description: "Techonology, Support Desk, Social Media"
})
.then(r => console.log(r.dataValues))
.catch(err => console.log(err))
*/
