//?Dependencies
const express = require('express');
const cors = require('cors');

//? Initial Configs
const app = express();
const db = require('./utils/database');
const initModels = require('./models/initModels');
const initValues = require('./models/initValues');

//> use format JSON
app.use(express.json());
app.use(cors()); // implementara cors en tu servidor

//> ROUTES <<
const positionsRouter = require('./positions/positions.router');
const teamsRouter = require('./teams/teams.router');
const employeesRouter = require('./employees/employees.router');
const computersRouter = require('./computers/computers.router');
const monitorsRouter = require('./monitors/monitors.router');
const authRouter = require('./auth/auth.router');
const requestRouter = require('./request/request.router');
const accesoriesRouter = require('./accesories/accesories.router');


//>> DATABASE AUTH AND SYNC <<
db.authenticate()
    .then(() => console.log('DB AUTHENTIFICATED'))
    .catch(err => console.log(err));

db.sync()
    .then(() => {
        initValues()
        console.log('DATA BASE SYNCED!!')
    })
    .catch(err => console.log(err));

<<<<<<< HEAD
=======
initModels();


>>>>>>> b217e2f6d1555d007c527a41e8f28538fbd6624a
// INDEX SERVER
app.get('/', (req, res, next) => {
    console.log(req.method);
    next();
}, (req, res) => {
    res.status(200).json({
        STATUS_SERVER: "OK!!!",
        SERVICES: {
            teams: `http://localhost:${port}/api/v1/teams`,
            employees: `http://localhost:${port}/api/v1/employees`,
            positions: `http://localhost:${port}/api/v1/positions`,
            computers: `http://localhost:${port}/api/v1/computers`,
            monitors: {
                get: `http://localhost:${port}/api/v1/monitors`,
                assignment: `http://localhost:${port}/api/v1/computers/assignment`,
            }
        }
    });
});


//> >>>ROUTER USE<<<
app.use('/api/v1/positions',positionsRouter); //? positions
app.use('/api/v1/teams',teamsRouter); //? teams
app.use('/api/v1/employees',employeesRouter); //? Employees
app.use('/api/v1/computers',computersRouter); //? Computers
app.use('/api/v1/monitors',monitorsRouter); //? Monitors
app.use('/api/v1/auth', authRouter); //? auth
app.use('/api/v1/request', requestRouter); //?RequestCommputers
app.use('/api/v1/accesories', accesoriesRouter); //?AccesoriesRegister


//> SERVER LISTEN
const {port} = require('./config');
app.listen(port,() => {
    console.log(`Server Started on PORT=${port}`)
});