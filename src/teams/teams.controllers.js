//? DEPENDENCIES
const Teams = require("../models/teams.models");

//> CREATE NEW TEAMS
const createNewTeam = async ( dataTeam ) => {
    return await Teams.create({
        nameTeam: dataTeam.nameTeamR,
        description: dataTeam.description,
        email: dataTeam.email,
        password: dataTeam.password
    })
};

//> GET ALL TEAMS
const getAllTeams = async () => {
    return await Teams.findAll({
        attributes: ['nameTeam','email','password']
    });
};

//> GET TEAMS BY NAME
const getTeamByName = async (nameTeam) => {
    return await Teams.findOne({
        where: {
            nameTeam
        }
    });
};


module.exports = {
    createNewTeam,
    getAllTeams,
    getTeamByName
};


//> ***TEST***
/*
createNewTeam({
    nameTeam: "Technology",
    description: "Support Desk, Social Media",
    email: "technology@jdmgroupcompany.com",
    password: "teamTech*2023*"
}).then(r => console.log(r.dataValues))
.catch(err => console.log(err))
*/
