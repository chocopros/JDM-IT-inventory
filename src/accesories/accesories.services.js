//? DEPENDENCIES

const accesoriesControllers = require('./accesories.controllers')

//! *** SERVICES ***

//> CREATE WEBCAMS
const postCam = ( req , res ) => {
    const {serialNumber,brand,model} = req.body;
    if (serialNumber && brand && model) {
        accesoriesControllers.createCam({serialNumber,brand,model})
            .then(r => res.status(201).json({message: `Webcams model: ${model} has Created`}))
            .catch(err => res.status(400).json(err))
    } else {
        res.status(400).json({
            message: `Fail Fields Register`,
            example: {
                "serialNumber": "Sn",
                "brand": "marca",
                "model": "model"
            }
        });
    };
};

//> CREATE WEBCAMS
const postEarphone = ( req , res ) => {
    const {serialNumber,brand,model} = req.body;
    if (serialNumber && brand && model) {
        accesoriesControllers.createEarphone({serialNumber,brand,model})
            .then(r => res.status(201).json({message: `Earphone model: ${model} has Created`}))
            .catch(err => res.status(400).json(err))
    } else {
        res.status(400).json({
            message: `Fail Fields Register`,
            example: {
                "serialNumber": "Sn",
                "brand": "marca",
                "model": "model"
            }
        });
    }
};

//> CREATE ACCESORIES
const createAccesories = ( req, res ) => {
    const {employeId, earphoneId, wecamId, others} = req.body;
    if (employeId && earphoneId && wecamId && others) {
        accesoriesControllers.createAccesories({employeId, earphoneId, wecamId, others})
        .then(r => res.status(201).json({message: `has Created Accesories`}))
        .catch(err => res.status(400).json(err))
    } else {
        res.status(400).json({
            message: `Fail Fields Register`,
            example: {
                "employeId": "Sn",
                "earphoneId ": 1,
                "wecamId": 1,
                "others": "others"
            }
        });
    };
};

module.exports = {
    postCam,
    postEarphone,
    createAccesories
}