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

const initialsPositions = async () => {
    return await Positions.bulkCreate([
        { position: 'Architecture Designer', description: 'All about Publications JDM' },
        { position: 'Team Leader', description: 'All about Publications JDM' },
        { position: 'Civil 3d Designer', description: 'All about Publications JDM' },
        { position: 'Permit Coordinator', description: 'All about Publications JDM' },
        { position: 'Community Manager', description: 'All about Publications JDM' },
        { position: 'Social Media', description: 'All about Publications JDM' },
        { position: 'Marketing Assistant', description: 'All about Publications JDM' },
        { position: 'Executive Assistant', description: 'All about Publications JDM' },
        { position: 'IT Director', description: 'All about Publications JDM' },
        { position: 'JDM Academy Director', description: 'All about Publications JDM' },
        { position: 'Director of Allinfo', description: 'All about Publications JDM' },
        { position: 'H&R Manager', description: 'All about Publications JDM' },
        { position: 'Director Operations', description: 'All about Publications JDM' },
        { position: 'Asst. Project. Manager', description: 'All about Publications JDM' },
        { position: 'Master Plan Civil', description: 'All about Publications JDM' },
        { position: 'Business Director', description: 'All about Publications JDM' },
        { position: 'Founder of JDM', description: 'All about Publications JDM' }
    ])
};


module.exports = {
    createNewPosition,
    getAllPositions,
    initialsPositions
};






/*

                {position:'Architecture Designer', description:'All about Publications JDM'},
                {position:'Team Leader', description:'All about Publications JDM'},
                {position:'Civil 3d Designer', description:'All about Publications JDM'},
                {position:'Permit Coordinator', description:'All about Publications JDM'},
                {position:'Marketing Assistant', description:'All about Publications JDM'},
                {position:'Executive Assistant', description:'All about Publications JDM'},
                {position:'IT Director', description:'All about Publications JDM'},
                {position:'JDM Academy Director', description:'All about Publications JDM'},
                {position:'Director of Allinfo', description:'All about Publications JDM'},
                {position:'H&R Manager', description:'All about Publications JDM'},
                {position:'Director Operations', description:'All about Publications JDM'},
                {position:'Asst. Project. Manager', description:'All about Publications JDM'},
                {position:'Master Plan Civil', description:'All about Publications JDM'},
                {position:'Business Director', description:'All about Publications JDM'},
                {position:'Founder of JDM', description:'All about Publications JDM'}

*/