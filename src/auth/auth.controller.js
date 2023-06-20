//? Dependencies
const {getEmployeeByEmail} = require('../employees/employees.controllers')

//* Email y Contrasena del Usuario
//? Email is unique in the DB

//> Login USER
    //! return user if LOGIN OK!!!
    //! return false if LOGIN it's Fail

const loginUser = async (email,passwordPlain) => {
    try {
        const employee = await getEmployeeByEmail(email)
        //console.log(user)
        if (employee === null) {
            return false
        } else {
            if(employee.status === "inactive"){
                return 'inactive';
            } else {
                return user
            };
        };
    } catch (err) {
        return err
    }
    
};


module.exports = {
    loginUser
}


//? TEST
/*
loginUser('beta@beta.com','p4s2W0rd*k3y')
    .then(r => { console.log(r)})
    .catch(err => { console.log(err)})
*/
/*
    "email": "adm@admin.com",
    "password": "p4s2W0rd*k3y"

*/
