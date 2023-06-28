//?DEPENDENCIES
const Request = require('../models/request.models');
const RequestComputer = require('../models/requestComputer.models');

// CREATE NEW REQUEST
const createNewRequest = async (dataRequest) => {
    return await Request.create({
        typesSupportId: dataRequest.typesSupportId,
        referenceId: dataRequest.referenceId,
        description: dataRequest.description,
        statusId: dataRequest.statusId
    })
};

// GET ALL REQUEST
const getAllRequest = async () => {
    return await Request.findAll()
};


//! **** >>>ASSINAMENT<<< ****

//> CREATE ASSIGNMENT
const createNewAssignment = async (dataAssigment) => {
    return await RequestComputer.create({
        requestId: dataAssigment.requestId,
        computerId: dataAssigment.computerId
    })
};

module.exports = {
    createNewRequest,
    createNewAssignment,
    getAllRequest
}
