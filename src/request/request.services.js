const requestControllers = require('./request.controllers')

//> CREATE NEW REQUEST
const newRequest = ( req, res ) => {

    const {typesSupportId, referenceId, description, statusId} = req.body;

    if (typesSupportId&&referenceId&&description&&statusId) {
        requestControllers.createNewRequest({typesSupportId, referenceId, description, statusId})
            .then(r => res.status(201).json('Request Computer Created'))
            .catch(err => res.status(400).json(err));
    } else {
        res.status(400).json({
            message: 'Fails Fields Register',
            values: {
                "typesSupportId": 1,
                "referenceId": 1,
                "description": "Description of Problema",
                "statusId:": 1
            }
        });
    };
};

//> GET ALL REQUEST
const getAllRequest = ( req, res ) => {
    requestControllers.getAllRequest()
        .then(r => res.status(200).json({Request: r}))
        .catch(err => res.status(400).json({messageError: err}))
};

//> CREATE ASSIGNMENT REQUEST
const newAssignment = ( req, res ) => {
    const {requestId, computerId} = req.body;
    if (requestId&&computerId) {
        requestControllers.createNewAssignment({requestId, computerId})
            .then(r => res.status(201).json('Request Computer Created'))
            .catch(err => res.status(400).json(err)); 
    } else {
        res.status(400).json({
            message: 'Fails Fields Register',
            values: {
                "requestId": 1,
                "computerId": 1
            }
        });
    }
};

module.exports = {
    newRequest,
    newAssignment,
    getAllRequest
}