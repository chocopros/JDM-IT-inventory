const TypeSupport = require("./typeSupport.models");
const Status = require('./status.models');
const References = require("./references.models");
const Positions = require("./positions.models");
const Teams = require("./teams.models");


//> VALUES TYPE SUPPORTS (HARDWARE&SOFWARE)
const postTypeSupports = async () => {
    return await TypeSupport.bulkCreate([
        {support: "HARDWARE"},
        {support: "SOFTWARE"}
    ])
};

//> VALUES STATUS
const postStatus = async () => {
    return await Status.bulkCreate([
        {status: "OK!"},
        {status: "Process.."},
        {status: "Paused"},
        {status: "Pendiente"}
    ])
};

//> REFERENCES
const postReferences = async () => {
    return  await References.bulkCreate([
        {reference: 'Autocad'},
        {reference: 'Cilvil 3D'},
        {reference: 'Autodesk'},
        {reference: 'Revit'},
        {reference: 'Bluebeams'},
        {reference: 'Word'},
        {reference: 'Excel'},
        {reference: 'Outlook'},
        {reference: 'Office 365'},
        {reference: 'VPN'},
        {reference: 'SkethUp'},
        {reference: 'other'},
    ])
};

//> POSITIONS
const postPositions = async () => {
    return await Positions.bulkCreate([
        {position: "Graphic Designer", description:"Social Media Disenos"},
        {position: "Social Media", description:"Social Media & Marketing"},
        {position: "Community Manager", description:"Desings "},
        {position: "Architecture Designer", description:""},
        {position: "Team Leader", description:""},
        {position: "Civil 3d Designer", description:""},
        {position: "Permit Coordinator", description:""},
        {position: "Marketing Assistant", description:""},
        {position: "Business Accounting", description:""},
        {position: "Executive Assistant", description:""},
        {position: "IT Director", description:""},
        {position: "JDM Academy Director", description:""},
        {position: "Director of Allinfo", description:""},
        {position: "H&R Manager", description:""},
        {position: "Director of Operations", description:""},
        {position: "Asst. Project. Manager", description:""},
        {position: "Master Plan Civil", description:""},
        {position: "Real estate agent", description:""},
        {position: "Director of Civil Construction", description:""},
        {position: "Director of Architecture", description:""},
        {position: "Director of Civil Engineering", description:""},
        {position: "Business Development Director", description:""},
        {position: "CEO", description:"Founder of JDM Group Company, LLC"},
    ])
};

//> TEAMS
const postTeams = async () => {
    return await Teams.bulkCreate([
        {nameTeam: "corporate", description: "assitant & corporate", email:"corporate@jdmgroupcompany.com", password: ""},
        {nameTeam: "project manager", description: "project manager & Supervisor", email:"pm@jdmgroupcompany.com", password: ""},
        {nameTeam: "technology", description: "Technology & Support Desk & Social MEdia", email:"technology@jdmgroupcompany.com", password: ""},
        {nameTeam: "team a", description: "civil's Desings", email:"teama@jdmgroupcompany.com", password: "a"},
        {nameTeam: "team b", description: "civil's Desings", email:"teamb@jdmgroupcompany.com", password: "b"},
        {nameTeam: "team c", description: "civil's Desings", email:"teamc@jdmgroupcompany.com", password: "c"},
        {nameTeam: "team d", description: "civil's Desings", email:"teamd@jdmgroupcompany.com", password: "d"},
        {nameTeam: "team e", description: "civil's Desings", email:"teame@jdmgroupcompany.com", password: "e"},
        {nameTeam: "team f", description: "civil's Desings", email:"teamf@jdmgroupcompany.com", password: "f"},
        {nameTeam: "team g", description: "civil's Desings", email:"teamg@jdmgroupcompany.com", password: "g"},
        {nameTeam: "team h", description: "civil's Desings", email:"teamh@jdmgroupcompany.com", password: "h"},
        {nameTeam: "team i", description: "civil's Desings", email:"teami@jdmgroupcompany.com", password: "i"},
        {nameTeam: "team j", description: "civil's Desings", email:"teamj@jdmgroupcompany.com", password: "j"},
        {nameTeam: "team k", description: "civil's Desings", email:"teamk@jdmgroupcompany.com", password: "k"},
        {nameTeam: "team l", description: "civil's Desings", email:"teaml@jdmgroupcompany.com", password: "l"},
        {nameTeam: "team m", description: "Architect Desings", email:"teamm@jdmgroupcompany.com", password: "m"},
        {nameTeam: "team n", description: "Architect Desings", email:"teamn@jdmgroupcompany.com", password: "n"},
        {nameTeam: "team o", description: "civil's Desings", email:"teamo@jdmgroupcompany.com", password: "o"},
        {nameTeam: "team p", description: "civil's Desings", email:"teamp@jdmgroupcompany.com", password: "p"}
    ])
};

const initValues = async () => {

    const dataPositions = await Positions.count();
    
    if (dataPositions === 0) {
        const dataStatus = await Status.count();
        const dataReferences = await References.count();
        const dataTypeSupport = await TypeSupport.count();
        const dataTeams = await Teams.count();

        if (dataTypeSupport === 0 && dataStatus === 0 && dataReferences === 0 && dataTeams === 0) {

            try {
                postTypeSupports();
                postStatus();
                postReferences();
                postPositions();
                postTeams();
            } catch (error) {
                console.log(error)
            };
        };
    } else {
        console.log("Data Existing")
    };
};

module.exports = initValues;
