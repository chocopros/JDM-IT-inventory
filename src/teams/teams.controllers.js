//? DEPENDENCIES
const Teams = require("../models/teams.models");

//> CREATE NEW TEAMS
const createNewTeam = async ( dataTeam ) => {
    return await Teams.create({
        nameTeam: dataTeam.nameTeam,
        description: dataTeam.description,
        email: dataTeam.email,
        password: dataTeam.password
    })
};

module.exports = {
    createNewTeam
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
