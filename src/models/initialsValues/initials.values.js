const Teams = require('../teams.models')
const Positions = require("../positions.models");
const Status = require('../status.models');
const Monitors = require('../monitors.models');
const References = require('../references.models')
const TypesSupports = require('../typeSupport.models')

// *** Initial teams Values ***
const initialsTeams = async () => {
    return await Teams.bulkCreate([
        { nameTeam: 'Team a', description: 'Civil Designs', email:'@jdmgroupcompan', password: '' },
        { nameTeam: 'Team b', description: 'Civil Designs', email:'@jdmgroupcompan', password: '' },
        { nameTeam: 'Team c', description: 'Civil Designs', email:'@jdmgroupcompan', password: '' },
        { nameTeam: 'Team d', description: 'Civil Designs', email:'@jdmgroupcompan', password: '' },
        { nameTeam: 'Team e', description: 'Civil Designs', email:'@jdmgroupcompan', password: '' },
        { nameTeam: 'Team f', description: 'Civil Designs', email:'@jdmgroupcompan', password: '' },
        { nameTeam: 'Team g', description: 'Civil Designs', email:'@jdmgroupcompan', password: '' },
        { nameTeam: 'Team h', description: 'Civil Designs', email:'@jdmgroupcompan', password: '' },
        { nameTeam: 'Team i', description: 'Civil Designs', email:'@jdmgroupcompan', password: '' },
        { nameTeam: 'Team j', description: 'Architect Designs', email:'@jdmgroupcompan', password: '' },
        { nameTeam: 'Team k', description: 'Civil Designs', email:'@jdmgroupcompan', password: '' },
        { nameTeam: 'Team l', description: 'Civil Designs', email:'@jdmgroupcompan', password: '' },
        { nameTeam: 'Team m', description: 'Civil Designs', email:'@jdmgroupcompan', password: '' },
        { nameTeam: 'Team n', description: 'Architect Designs', email:'@jdmgroupcompan', password: '' },
        { nameTeam: 'Team o', description: 'Architect Designs', email:'@jdmgroupcompan', password: '' },
        { nameTeam: 'Team p', description: 'Civil Designs', email:'@jdmgroupcompan', password: '' },
        { nameTeam: 'Projects Manager', description: 'Civil Designs', email:'@jdmgroupcompan', password: '' },
        { nameTeam: 'Technology', description: 'Civil Designs', email:'@jdmgroupcompan', password: '' },
        { nameTeam: 'Coporate', description: 'Civil Designs', email:'@jdmgroupcompan', password: '' }
    ]);
};


// *** Initial teams Values ***
const initialsPositions = async () => {
    return await Positions.bulkCreate([
        { position: 'Architecture Designer', description: 'All about Publications JDM' },
        { position: 'Team Leader', description: 'All about Publications JDM' },
        { position: 'Civil 3d Designer', description: 'All about Publications JDM' },
        { position: 'Permit Coordinator', description: 'All about Publications JDM' },
        { position: 'Community Manager', description: 'All about Publications JDM' },
        { position: 'Social Media', description: 'All about Publications JDM' },
        { position: 'Marketing Assistant', description: 'All about Publications JDM' },
        { position: 'Executive Assistant', description: 'All about Publications JDM' },
        { position: 'IT Director', description: 'All about Publications JDM' },
        { position: 'JDM Academy Director', description: 'All about Publications JDM' },
        { position: 'Director of Allinfo', description: 'All about Publications JDM' },
        { position: 'H&R Manager', description: 'All about Publications JDM' },
        { position: 'Director Operations', description: 'All about Publications JDM' },
        { position: 'Asst. Project. Manager', description: 'All about Publications JDM' },
        { position: 'Master Plan Civil', description: 'All about Publications JDM' },
        { position: 'Business Director', description: 'All about Publications JDM' },
        { position: 'Founder of JDM', description: 'All about Publications JDM' }
    ]);
};

const initialsMonitors = async() => {
    return await Monitors.beforeBulkCreate([
        { serialNumber: 'Architecture Designer', brand: 'All about Publications JDM', model: '', screenSize: '21 Pulg.'  },
    ]);
};

// ******* REQUESTS *********** //

const initialsReferences = async() => {
    return await References.beforeBulkCreate([
        {reference: 'Hardware'},
        {reference: 'Office 365'},
        {reference: 'Autodesk'},
        {reference: 'Bluebeams'},
        {reference: 'Word'},
        {reference: 'Excel'},
        {reference: 'Power Point'},
        {reference: 'Outlook'},
        {reference: 'Civil 3d'},
        {reference: 'SketchUp'},
        {reference: 'Teams'},
        {reference: 'Google Earth'},
        {reference: 'Impresora'},
        {reference: 'Others'},
    ]);
};


const initialsStatus = async() => {
    return await Status.beforeBulkCreate([
        {status: 'OK!!!'},
        {status: 'In Proces...'},
        {status: 'PAUSED'}
        
    ])
};

const initialsTypeSupports = async() => {
    return await TypesSupports.beforeBulkCreate([
        {support: 'OK!!!'},
        {status: 'In Proces...'}
    ]);
};
