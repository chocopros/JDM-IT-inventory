//? DEPENDENCIES CONTROLLERS
const computersControllers = require('./computers.controllers')

//! *** SERVICES ***

//> CREATE NEW COMPUTER
const createComputer = ( req, res ) => {
    const {serialNumber,brand,model,processor,memoryRam,hardDisk,videoCard} = req.body

    if (serialNumber&&brand&&model&&processor&&memoryRam&&hardDisk) {
        computersControllers.createNewComputer({serialNumber,brand,model,processor,memoryRam,hardDisk,videoCard})
            .then(r => res.status(201).json('Computer Registered, Created'))
            .catch(err => res.status(400).json(err))
    } else {
        res.status(400).json({
            message: 'Fails Fields Register',
            values: {
                "serialNumber": "S3rial-XxX-12345",
                "brand": "LENOVO",
                "model": " ThinkCentre A25",
                "processor": "INTEL i7-9000k 3.6 Ghz",
                "memoryRam": "16GB DDR3",
                "hardDisk": "500GB SSD",
                "videoCard": "GTX 550 TI 1GB GDDR5 o >>vacio<<"
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

