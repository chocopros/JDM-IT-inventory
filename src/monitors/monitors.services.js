//? DEPENDENCIES CONTROLLERS
const monitorsControllers = require('./monitors.controllers')

//! *** SERVICES ***

//> CREATE NEW COMPUTER

const createMonitor = ( req, res ) => {
    const {serialNumber,brand,model,screenSize} = req.body

    if (serialNumber&&brand&&model&&screenSize) {
        monitorsControllers.createNewMonitor({serialNumber,brand,model,screenSize})
            .then(r => res.status(201).json('Monitor Registered, Created'))
            .catch(err => res.status(400).json(err))
    } else {
        res.status(400).json({
            message: 'Fails Fields Register',
            values: {
                "serialNumber": "ASDSAV@#@SD2",
                "brand": "AOC",
                "model": "Mx299-1",
                "screenSize": "21 Pulg."
            }
        })
    }
};

//> GET ALL MONITORS
const getAllMonitors = ( req, res) => {
    monitorsControllers.getAllMonitor()
        .then(r => {
            !r ? res.status(200).json({message: 'NO MONITORS'}): res.status(200).json({Monitors: r})
        })
        .catch(err => res.status(400).json({err}))
};

//> ASIGNING MONITOR
const createAsign = ( req, res ) => {
    const dataRegister = req.body
    if (dataRegister.monitorId && dataRegister.employeeId) {
        monitorsControllers.createMonitorsForEmployes(dataRegister)
            .then(r => res.status(201).json('Monitors Registered to Employee, Created'))
            .catch(err => res.status(400).json(err))
    } else {
        res.status(400).json({
            message: 'Fails Fields Register',
            values: {
                "monitorId": "Teams's Name",
                "employeeId": "Descriptions of teams",
            }
        })
    }
};

module.exports = {
    createMonitor,
    getAllMonitors,
    createAsign
}