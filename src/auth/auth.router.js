

//? Auth va a conetener las turas de autorizacion y autentificacion

//* Login
//* Register
//* Recovery Password -> modificar la contrasña del usuario
//* Verify user

//? Dependencies
const authServices = require('./auth.services')

const router = require('express').Router()

//? /api/v1/auth
router.post('/', authServices.login)

module.exports = router

