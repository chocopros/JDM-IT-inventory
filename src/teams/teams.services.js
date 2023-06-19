//? DEPENDENCIES CONTROLLERS
const teamsControllers = require('./teams.controllers')

//! *** SERVICES ***

//> CREATE TEAMS
const createTeam = ( req, res ) => {
    const {nameTeam,description,email,password} = req.body

    //? team x or Team X --> TEAM X
    const nameTeamR = String(nameTeam).toUpperCase()
    console.log(nameTeamR)
        
    if( nameTeam && description && email && password ){
    
        teamsControllers.createNewTeam({nameTeamR,description,email,password})
            .then(r => res.status(201).json('Teams Created'))
            .catch(err => res.status(400).json(err))
    } else {
        res.status(400).json({
            message: 'Fails Fields Register',
            values: {
                "nameTeam": "Teams's Name",
                "description": "Descriptions of teams",
                "email": "teamsx@jdmgroupcompany.com",
                "password": "PasswordTeams123"
            }
        })
    };
};

//> GET ALL TEAMS
const getAllTeams = ( req , res ) => {
    teamsControllers.getAllTeams()
        .then(r => {
            !r ? res.status(200).json({message: 'NO TEAMS'}): res.status(200).json({teams: r})
        })
        .catch(err => res.status(400).json({err}))
};

//> GET TEAM BY NAME
const getTeamByName = ( req, res ) => {
    const team = req.params.team
    const nameTeam = team.toUpperCase()
    teamsControllers.getTeamByName(nameTeam)
        .then(r => r ? res.status(200).json(r) : res.status(200).json({message: 'TEAM NO FOUND'}))
        .catch(err => res.status(404).json({message: err.message}))      
};


module.exports = {
    createTeam,
    getAllTeams,
    getTeamByName
};