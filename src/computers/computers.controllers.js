//?DEPENDENCIES
const Computers = require("../models/computers.models");

//> CREATE NEW COMPUTER
const createNewComputer = async (dataComputer) => {
    return await Computers.create({
        isLaptop: false,
        isActive: true,
        serialNumber: dataComputer.serialNumber,
        brand: dataComputer.brand,
        model: dataComputer.model,
        processor: dataComputer.processor,
        memoryRam: dataComputer.memoryRam,
        hardDisk: dataComputer.hardDisk,
        videoCard: dataComputer.videoCard,
        urlImg: null
    })
};

//> GET ALL COMPUTERS
const getAllComputers = async () => {
    return await Computers.findAndCountAll({
        attributes: ['id','serialNumber','brand','model','processor','memoryRam','hardDisk','img_url']
    })
};



module.exports = {
    getAllComputers,
    createNewComputer
}