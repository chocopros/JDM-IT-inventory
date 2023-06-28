//? DEPENDENCIES

const Request = require('../models/request.models');

//> CREATE NEW REQUEST
const createNewRequest = async (dataRequest) => {
    return await Employees.create({
        firstName: dataEmployee.firstName,
        typesSupportId: dataEmployee.typesSupportId,
        referenceId: dataEmployee.referenceId,
        description: dataEmployee.description,
        statusId: dataEmployee.statusId
    })
};

//GET ALL REQUEST
