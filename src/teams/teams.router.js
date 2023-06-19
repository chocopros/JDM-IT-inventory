const router = require('express').Router();

const teamsServices = require('./teams.services')


//> ROUTE TEAMS
router.route('/')
    .get(teamsServices.getAllTeams)
    .post(teamsServices.createTeam);

router.route('/:team')
    .get(teamsServices.getTeamByName)

module.exports = router;