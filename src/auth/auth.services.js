

const jwt = require('jsonwebtoken')

const {loginUser} = require('./auth.controller');
const { jwtSecret } = require('../config');

const login = ( req, res ) => {
    const {email, password} = req.body
    
    if (!email || !password) return res.status(400).json({
        message: 'Missing Data',
        info: {
            "email": "jarechider@jdmgroupcompany.com",
            "password": "p4s2W0rd*k3y"
        }
    })

    loginUser(email, password)
        .then(employee => {      
            if (employee) {
                //console.log(user)
                if (employee === 'inactive') {
                    res.status(404).json({message: "Employee was deleted or not found!!!"})
                } else if (employee) {
                    const token = jwt.sign({
                        id: employee.id,
                        email: employee.email,
                        role: employee.role
                    },jwtSecret)
                    res.status(200).json({message: "Correct Credentials", token})
                }
            } else {
                res.status(401).json({message: 'Invalid Credentials'})
            }
            
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({message: err})
        })

};

module.exports = {
    login
}

