//?DEPENDENCIES
const Webcams = require('../models/webcams.models');
const Earphones = require('../models/earphones.models')
const Accesories = require('../models/accesories.models')

//CREATE ACCESORIES
const createAccesories = async(dataAccesories) => {
    return await Accesories.create({
        employeeEmployeeId: dataAccesories.employerId,
        earphoneId: dataAccesories.earphoneId,
        webcamId: dataAccesories.webcamId,
        others: dataAccesories.others
    })
};

//CREATE WEB CAMS
const createCam = async (dataCam) => {
    return await Webcams.create({
        serialNumber: dataCam.serialNumber,
        brand: dataCam.brand,
        model: dataCam.model,
        imgUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_887217-MLV44117946514_112020-F.webp'
    })
};

//CREATE EARPHONE
const createEarphone = async (dataEarphone) => {
    return await Earphones.create({
        serialNumber: dataEarphone.serialNumber,
        brand: dataEarphone.brand,
        model: dataEarphone.model,
        imgUrl: null
    })
};


module.exports = {
    createAccesories,
    createCam,
    createEarphone
};


