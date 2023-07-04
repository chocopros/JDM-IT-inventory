const TypeSupport = require("./typeSupport.models");
const Status = require('./status.models');
const References = require("./references.models");
const Positions = require("./positions.models");
const Teams = require("./teams.models");
const Earphones = require("./earphones.models");
const WebCams = require('./webcams.models');
const Monitors = require('./monitors.models');
const Computers = require("./computers.models");

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

//EARPHONES
const postEarphone = async () => {
    return await Earphones.bulkCreate([
        {serialNumber: "No Aplica",brand: "No aplica",model: "No aplica", imgUrl: "" },
        {serialNumber: "1",brand: "HP",model: "Headset H120G", imgUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_887217-MLV44117946514_112020-F.webp" },
        {serialNumber: "2",brand: "Redragon",model: "H260", imgUrl: "https://http2.mlstatic.com/D_NQ_NP_754688-MLV49160437416_022022-O.webp" }
    ])
};

//WEBCAMS
const postWebCams = async () => {
    return await WebCams.bulkCreate([
        {serialNumber: "No Aplica",brand: "No aplica",model: "No aplica", imgUrl: "" },
        {serialNumber: "1",brand: "China",model: "Desconocida", imgUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_887217-MLV44117946514_112020-F.webp" },
        {serialNumber: "2",brand: "Logitech",model: "Logi C505", imgUrl: "https://http2.mlstatic.com/D_NQ_NP_616291-MLV49665401114_042022-O.webp" }
    ])
};

//MONITOR
const initMonitor = async () => {
    return await Monitors.bulkCreate([
        /*1*/{serialNumber: "1CR92805MT", brand:"HP", model:"N246V", isActive: true},
        /*2*/{serialNumber: "1CR938076T", brand:"HP", model:"N246V", isActive: true},
        /*3*/{serialNumber: "GMXJ6HA081345", brand:"AOC ", model:"24B1", isActive: true},
        /*4*/{serialNumber: "1CR8391H3G", brand:"HP", model:"N246V", isActive: true},
        /*5*/{serialNumber: "AQCK61A001642 ", brand:"AOC", model:"E2270S", isActive: true},
        /*6*/{serialNumber: "AQCI51A004872", brand:"AOC", model:"E2270S", isActive: true},
        /*7*/{serialNumber: "1CR91715BP", brand:"HP", model:"N246V", isActive: true},
        /*8*/{serialNumber: "1CR9191380", brand:"HP", model:"N246V", isActive: true},
        /*9*/{serialNumber: "E29H9QA000525", brand:"AOC", model:"SWHE", isActive: true},
        /*10*/{serialNumber: "E29H9QA000539", brand:"AOC", model:"SWHE", isActive: true}
    ])
};

//COMPUTER
const initComputer = async () => {
    return await Computers.bulkCreate([
        {isLaptop: false, isActive: true, serialNumber: "HM4HCX1", brand:"LENOVO", model:"ThinkCentre", processor: "Intel i7 3770 3.40Ghz", memoryRam: "32GB DDR3", hardDisk: "500 GB SSD", videoCard: "No"},
        {isLaptop: false, isActive: true, serialNumber: "MJDYLTL ", brand:"LENOVO", model:"ThinkCentre", processor: "Intel i7 3770 3.40Ghz", memoryRam: "16GB DDR3", hardDisk: "500 GB SSD", videoCard: "No"},
        {isLaptop: false, isActive: true, serialNumber: "MJCCHTB", brand:"LENOVO", model:"ThinkCentre", processor: "Intel i7 2600 3.40Ghz", memoryRam: "16GB DDR3", hardDisk: "120 GB SSD", videoCard: "ATI Radeon HD 2400"},
        {isLaptop: false, isActive: true, serialNumber: "FNDZX12", brand:"DELL", model:"optiplex", processor: "Intel i5 4570 3.20Ghz", memoryRam: "32GB DDR3", hardDisk: "500 GB SSD", videoCard: "HD 6500 2GB GDDR3"},
        {isLaptop: false, isActive: true, serialNumber: "59C8Y12", brand:"DELL", model:"optiplex", processor: "Intel i5 4570 3.20Ghz", memoryRam: "32GB DDR3", hardDisk: "500 GB SSD", videoCard: "No"},
        {isLaptop: false, isActive: true, serialNumber: "FL7VN22", brand:"DELL", model:"optiplex", processor: "Intel i5 4590 3.30Ghz", memoryRam: "32GB DDR3", hardDisk: "500 GB SSD", videoCard: "No"}
    ])
};


//> TEST
/*
try {
    initComputer()
} catch (error) {
    console.log(error)
}
*/



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
                postEarphone();
                postWebCams();
                initMonitor();
                initComputer();
            } catch (error) {
                console.log(error)
            };
        };
    } else {
        console.log("Data Existing")
    };
};

module.exports = initValues;
