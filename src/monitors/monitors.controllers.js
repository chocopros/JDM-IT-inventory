//? DEPENDENCIES

const Monitors = require('../models/monitors.models');
const MoniEmployee = require('../models/monitorEmployee.models');

//> CREATE NEW MONITOR
const createNewMonitor = async (dataMonitor) => {
    return await Monitors.create({
        isActive: true,
        serialNumber: dataMonitor.serialNumber,
        brand: dataMonitor.brand,
        model: dataMonitor.model,
        screenSize: '21 Plugin.'
    })
};

//> GET ALL MONITORS
const getAllMonitor = async () => {
    return await Monitors.findAndCountAll({
        attributes: ['id','serialNumber','brand','model']
    })
};

//> MONITORS ASIGN FROM EMPLOYEE

const createMonitorsForEmployes = async (dataRegister) => {
    return await MoniEmployee.create({
        monitorId: dataRegister.monitorId,
        employeeEmployeeId: dataRegister.employeeId
    })
};

module.exports = {
    getAllMonitor,
    createNewMonitor,
    createMonitorsForEmployes
}