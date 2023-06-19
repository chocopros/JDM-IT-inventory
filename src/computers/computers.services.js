//? DEPENDENCIES CONTROLLERS
const computersControllers = require('./computers.controllers')

//! *** SERVICES ***

//> CREATE NEW COMPUTER
const createComputer = ( req, res ) => {
    const {serialNumber,brand,model,processor,memoryRam,hardDisk} = req.body

    if (serialNumber&&brand&&model&&processor&&memoryRam&&hardDisk) {
        computersControllers.createNewComputer({serialNumber,brand,model,processor,memoryRam,hardDisk})
            .then(r => res.status(201).json('Computer Registered, Created'))
            .catch(err => res.status(400).json(err))
    } else {
        res.status(400).json({
            message: 'Fails Fields Register',
            values: {
                "serialNumber": "Teams's Name",
                "brand": "Descriptions of teams",
                "model": "teamsx@jdmgroupcompany.com",
                "processor": "PasswordTeams123",
                "memoryRam": "PasswordTeams123",
                "hardDisk": "PasswordTeams123"
            }
        })
    }
};

//> GET ALL COMPUTERS
const getAllComputers = ( req , res ) => {
    computersControllers.getAllComputers()
        .then(r => {
            !r ? res.status(200).json({message: 'NO COMPUTERS'}): res.status(200).json({Computers: r})
        })
        .catch(err => res.status(400).json({err}))
};

module.exports = {
    createComputer,
    getAllComputers
}

