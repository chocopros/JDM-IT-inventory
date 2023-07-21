const TypeSupport = require("./typeSupport.models");
const Status = require('./status.models');
const References = require("./references.models");
const Positions = require("./positions.models");
const Teams = require("./teams.models");
const Earphones = require("./earphones.models");
const WebCams = require('./webcams.models');
const Monitors = require('./monitors.models');
const Computers = require("./computers.models");
const Employees = require('./employees.models')

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
        /*01*/{position: "Graphic Designer", description:"Social Media Disenos"},
        /*02*/{position: "Social Media", description:"Social Media & Marketing"},
        /*03*/{position: "Community Manager", description:"Desings "},
        /*04*/{position: "Architecture Designer", description:""},
        /*05*/{position: "Team Leader", description:""},
        /*06*/{position: "Civil 3d Designer", description:""},
        /*07*/{position: "Permit Coordinator", description:""},
        /*08*/{position: "Marketing Assistant", description:""},
        /*09*/{position: "Business Accounting", description:""},
        /*10*/{position: "Executive Assistant", description:""},
        /*11*/{position: "IT Director", description:""},
        /*12*/{position: "JDM Academy Director", description:""},
        /*13*/{position: "Director of Allinfo", description:""},
        /*14*/{position: "H&R Manager", description:""},
        /*15*/{position: "Director of Operations", description:""},
        /*16*/{position: "Asst. Project. Manager", description:""},
        /*17*/{position: "Master Plan Civil", description:""},
        /*18*/{position: "Real estate agent", description:""},
        /*19*/{position: "Director of Civil Construction", description:""},
        /*20*/{position: "Director of Architecture", description:""},
        /*21*/{position: "Director of Civil Engineering", description:""},
        /*22*/{position: "Business Development Director", description:""},
        /*23*/{position: "CEO", description:"Founder of JDM Group Company, LLC"},
        
    ])
};

//> TEAMS
const postTeams = async () => {
    return await Teams.bulkCreate([
        /*1*/{nameTeam: "CORPORATE", description: "assitant & corporate", email:"corporate@jdmgroupcompany.com", password: ""},
        /*2*/{nameTeam: "PROJECT MANAGER", description: "project manager & Supervisor", email:"pm@jdmgroupcompany.com", password: ""},
        /*3*/{nameTeam: "TECHNOLOGY", description: "Technology & Support Desk & Social MEdia", email:"technology@jdmgroupcompany.com", password: ""},
        /*4*/{nameTeam: "TEAM A", description: "civil's Desings", email:"teama@jdmgroupcompany.com", password: "a"},
        /*5*/{nameTeam: "TEAM B", description: "civil's Desings", email:"teamb@jdmgroupcompany.com", password: "b"},
        /*6*/{nameTeam: "TEAM C", description: "civil's Desings", email:"teamc@jdmgroupcompany.com", password: "c"},
        /*7*/{nameTeam: "TEAM D", description: "civil's Desings", email:"teamd@jdmgroupcompany.com", password: "d"},
        /*8*/{nameTeam: "TEAM E", description: "civil's Desings", email:"teame@jdmgroupcompany.com", password: "e"},
        /*9*/{nameTeam: "TEAM F", description: "civil's Desings", email:"teamf@jdmgroupcompany.com", password: "f"},
        /*10*/{nameTeam: "TEAM G", description: "civil's Desings", email:"teamg@jdmgroupcompany.com", password: "g"},
        /*11*/{nameTeam: "TEAM H", description: "civil's Desings", email:"teamh@jdmgroupcompany.com", password: "h"},
        /*12*/{nameTeam: "TEAM I", description: "civil's Desings", email:"teami@jdmgroupcompany.com", password: "i"},
        /*13*/{nameTeam: "TEAM J", description: "Architect Desings", email:"teamj@jdmgroupcompany.com", password: "j"},
        /*14*/{nameTeam: "TEAM K", description: "civil's Desings", email:"teamk@jdmgroupcompany.com", password: "k"},
        /*15*/{nameTeam: "TEAM L", description: "civil's Desings", email:"teaml@jdmgroupcompany.com", password: "l"},
        /*16*/{nameTeam: "TEAM M", description: "Architect Desings", email:"teamm@jdmgroupcompany.com", password: "m"},
        /*17*/{nameTeam: "TEAM N", description: "Architect Desings", email:"teamn@jdmgroupcompany.com", password: "n"},
        /*18*/{nameTeam: "TEAM O", description: "civil's Desings", email:"teamo@jdmgroupcompany.com", password: "o"},
        /*19*/{nameTeam: "TEAM P", description: "civil's Desings", email:"teamp@jdmgroupcompany.com", password: "p"}
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
        /*1*/{serialNumber: "BA9H172600310", brand:"MSI", model:"PRO MP241X", isActive: true},
        /*2*/{serialNumber: "GMXJSHA041244", brand:"AOC", model:"24B1H", isActive: true},
        /*3*/{serialNumber: "8D0083PA16EA87", brand:"DAHUA", model:"DHI-LM32", isActive: true},
        /*4*/{serialNumber: "4PMHH4TRC04155N", brand:"SAMSUMG", model:"S24R356FZN", isActive: true},
        /*5*/{serialNumber: "1CR8391H3G", brand:"HP", model:"N246V", isActive: true},
        /*6*/{serialNumber: "1CR9171524", brand:"HP", model:"N246V", isActive: true},
        /*7*/{serialNumber: "1CR917152M", brand:"HP", model:"N246V", isActive: true},
        /*8*/{serialNumber: "1CR9291077", brand:"HP", model:"N246V", isActive: true},
        /*9*/{serialNumber: "AQCK61000894", brand:"HP", model:"E22705", isActive: true},
        /*10*/{serialNumber: "EA0H062101104", brand:"MSI", model:"G241VC", isActive: true},
        /*11*/{serialNumber: "210NTJJ6H004", brand:"LG", model:"24MP60G", isActive: true},
        /*12*/{serialNumber: "AQCK61A001642", brand:"HP", model:"E22705", isActive: true},
        /*13*/{serialNumber: "1CR91914SF", brand:"HP", model:"N246V", isActive: true},
        /*14*/{serialNumber: "1CR92910BJ", brand:"HP", model:"N246V", isActive: true},
        /*15*/{serialNumber: "GGZJ3HA175998", brand:"AOC", model:"236LM00014", isActive: true},
        /*16*/{serialNumber: "E29H9QA000523", brand:"AOC", model:"236LM00029", isActive: true},
        /*17*/{serialNumber: "AQCI5A004877", brand:"HP", model:"215LM00041", isActive: true},
        /*18*/{serialNumber: "AQC15A004904", brand:"HP", model:"215LM00041", isActive: true},
        /*19*/{serialNumber: "E29H9QA000540", brand:"AOC", model:"236LM00029", isActive: true},
        /*20*/{serialNumber: "E29H9QA000470", brand:"AOC", model:"236LM00029", isActive: true},
        /*21*/{serialNumber: "GGZJ2HA166505", brand:"AOC", model:"236LM00014", isActive: true},
        /*22*/{serialNumber: "GGZJ4HA194428", brand:"AOC", model:"236LM00014", isActive: true},
        /*23*/{serialNumber: "GGZJ3HA176013", brand:"AOC", model:"236LM00014", isActive: true},
        /*24*/{serialNumber: "E29H9QA000507", brand:"AOC", model:"236LM00029", isActive: true},
        /*25*/{serialNumber: "E29H9QA000539", brand:"AOC", model:"236LM00029", isActive: true},
        /*26*/{serialNumber: "E29H9QA000525", brand:"AOC", model:"236LM00029", isActive: true},
        /*27*/{serialNumber: "GMXJSHA041228", brand:"AOC", model:"24B1H", isActive: true},
        /*28*/{serialNumber: "1CR938076T", brand:"HP", model:"N246V", isActive: true},
        /*29*/{serialNumber: "1CR917115BP", brand:"HP", model:"N246V", isActive: true},
        /*30*/{serialNumber: "1CR9191380", brand:"HP", model:"N246V", isActive: true},
        /*31*/{serialNumber: "1CR9280SPX", brand:"HP", model:"N246V", isActive: true},
        /*32*/{serialNumber: "1CR929107L", brand:"HP", model:"N246V", isActive: true},
        /*33*/{serialNumber: "1CR91210BM", brand:"HP", model:"N246V", isActive: true},
        /*34*/{serialNumber: "CNC008QNBS", brand:"COMPAQ", model:"S2022a", isActive: true},
        /*35*/{serialNumber: "A5ZK41A00084", brand:"AOC", model:"E2270S", isActive: true},
        /*36*/{serialNumber: "E29H9QA000517", brand:"AOC", model:"236LM00029", isActive: true},
        /*37*/{serialNumber: "E29H9QA000560", brand:"AOC", model:"236LM00029", isActive: true},
        /*38*/{serialNumber: "AQCK61A001634", brand:"AOC", model:"E2270S", isActive: true},
        /*39*/{serialNumber: "GGZJ3HA187964", brand:"AOC", model:"236LM00014", isActive: true},
        /*40*/{serialNumber: "E29H8QA001501", brand:"AOC", model:"236LM00029", isActive: true},
        /*41*/{serialNumber: "29200/00312342", brand:"XIAOMI", model:"RMMNT238NF", isActive: true},
        /*42*/{serialNumber: "1CR9280SMT", brand:"HP", model:"N246V", isActive: true},
        /*43*/{serialNumber: "E29H8QA001515", brand:"AOC", model:"236LM00029", isActive: true},
        /*44*/{serialNumber: "1CR912107X", brand:"HP", model:"N246V", isActive: true},
        /*45*/{serialNumber: "EA0H062101099", brand:"MSI", model:"Optix G241VC", isActive: true},
        /*46*/{serialNumber: "AQC151A004872", brand:"HP", model:"E22705", isActive: true},
        /*47*/{serialNumber: "1CR8391DSF", brand:"HP", model:"N246V", isActive: true},
        /*48*/{serialNumber: "1CR8440GKJ", brand:"HP", model:"N246V", isActive: true},
        /*49*/{serialNumber: "90201068942", brand:"ACER", model:"K242HYL", isActive: true},
        /*50*/{serialNumber: "GMXJ6HA081300", brand:"AOC", model:"24B1H", isActive: true},
        /*51*/{serialNumber: "GMXJ6HA081345", brand:"AOC", model:"24B1H", isActive: true}
    
    ])
};

//COMPUTER
const initComputer = async () => {
    return await Computers.bulkCreate([
        /*1*/{isLaptop: true, isActive: true, serialNumber: "CND7300J3D", brand:"HP", model:"I5-bs053od", processor: "Intel i7-7500U 2.90Ghz", memoryRam: "6GB DDR4 2133Mhz", hardDisk: "500GB SSD HP", videoCard: "No"},
        /*2*/{isLaptop: false, isActive: true, serialNumber: "MJBXVHB", brand:"LENOVO", model:"ThinkCentre", processor: "Intel i7-2600 3.40Ghz", memoryRam: "8GB DDR3 1333Mhz", hardDisk: "240GB SSD", videoCard: "No"},
        /*3*/{isLaptop: false, isActive: true, serialNumber: "MJGNRLK", brand:"LENOVO", model:"ThinkCentre", processor: "Intel i7-2400 3.10Ghz", memoryRam: "16GB DDR3 1333Mhz", hardDisk: "500GB SSD ADATA", videoCard: "ATI Radeon HD 2400"},
        /*4*/{isLaptop: true, isActive: true, serialNumber: "5CD123MPRL", brand:"HP", model:"15s-fq2000", processor: "Intel i5-1135G7 4.20Ghz", memoryRam: "12GB DDR4 26666Mhz", hardDisk: "254GB M.2 HP", videoCard: "HD 6500 2GB GDDR3"},
        /*5*/{isLaptop: false, isActive: true, serialNumber: "MXL01555SM", brand:"HP", model:"optiplex", processor: "Intel i7-9700 3.0Ghz", memoryRam: "8GB DDR4 2666Mhz", hardDisk: "500GB SSD", videoCard: "No"},
        /*6*/{isLaptop: false, isActive: true, serialNumber: "MJDXLDF", brand:"LENOVO", model:"optiplex", processor: "Intel i7-2400 3.10Ghz", memoryRam: "12GB DDR3 1333Mhz", hardDisk: "120GB SSD HP", videoCard: "No"},
        /*7*/{isLaptop: false, isActive: true, serialNumber: "HLZJCX1", brand:"DELL", model:"optiplex", processor: "Intel i7-3770 3.40Ghz", memoryRam: "32GB DDR3 1600Mhz", hardDisk: "500GB SSD", videoCard: "No"},
        /*8*/{isLaptop: false, isActive: true, serialNumber: "606XS02", brand:"DELL", model:"optiplex", processor: "Intel i5-4590 3.30Ghz", memoryRam: "16GB DDR3 1333Mhz", hardDisk: "3TB HHD", videoCard: "No"},
        /*9*/{isLaptop: false, isActive: true, serialNumber: "8CG823072v", brand:"HP", model:"optiplex", processor: "Intel i5-8400 2.80GHZ", memoryRam: "12GB DDR4 2666Mhz", hardDisk: "240GB SSD + 500GB HHD", videoCard: "No"},
        /*10*/{isLaptop: false, isActive: true, serialNumber: "SH9JDH2", brand:"DELL", model:"optiplex", processor: "Intel i5-6700 3.40Ghz", memoryRam: "8GB DDR4 2133 MHZ", hardDisk: "240GB SSD", videoCard: "No"},
        /*11*/{isLaptop: false, isActive: true, serialNumber: "HMMGCX1", brand:"DELL", model:"optiplex", processor: "Intel i5-3770 3.4 GHZ", memoryRam: "32GB DDR3 1600Mhz", hardDisk: "240GB SSD", videoCard: "No"},
        /*12*/{isLaptop: false, isActive: true, serialNumber: "J16X502", brand:"DELL", model:"optiplex", processor: "Intel i5-4590 3.30Ghz", memoryRam: "16GB DDR3 1600Mhz", hardDisk: "3TB HHD SSD", videoCard: "No"},
        /*13*/{isLaptop: false, isActive: true, serialNumber: "MJEWXHR", brand:"LENOVO", model:"optiplex", processor: "Intel i5-2400 3.10Ghz", memoryRam: "16GB DDR3 1333Mhz", hardDisk: "2TB HHD SSDD", videoCard: "No"},
        /*14*/{isLaptop: false, isActive: true, serialNumber: "MJKBZCK", brand:"LENOVO", model:"optiplex", processor: "Intel i7-2600 3.40Ghz", memoryRam: "16GB DDR3 1333Mhz", hardDisk: "500GB SSD", videoCard: "No"},
        /*15*/{isLaptop: false, isActive: true, serialNumber: "MG000LQ3", brand:"LENOVO", model:"optiplex", processor: "Intel i5-4570 3.20Ghz", memoryRam: "16GB DDR3 1333Mhz", hardDisk: "240GB SSD + 500GB HHD", videoCard: "No"},
        /*16*/{isLaptop: false, isActive: true, serialNumber: "JDM-001", brand:"Assembled", model:"Assembled", processor: "AMD RYZEN 5 5600G", memoryRam: "16GB DDR4 3200Mhz", hardDisk: "254GB SSD", videoCard: "No"},
        /*17*/{isLaptop: false, isActive: true, serialNumber: "59C8Y12", brand:"DELL", model:"optiplex", processor: "Intel i5-4570 3.20Ghz", memoryRam: "32GB DDR3 1600Mhz", hardDisk: "500GB SSD", videoCard: "No"},
        /*18*/{isLaptop: false, isActive: true, serialNumber: "FL7VN22", brand:"DELL", model:"optiplex", processor: "Intel i5 4590 3.30Ghz", memoryRam: "32GB DDR3 1600Mhz", hardDisk: "500GB SSD", videoCard: "No"},
        /*19*/{isLaptop: false, isActive: true, serialNumber: "HM4HCX1", brand:"DELL", model:"optiplex", processor: "Intel i7-3770 3.40Ghz", memoryRam: "32GB DDR3 1600Mhz", hardDisk: "500GB SSD", videoCard: "No"},
        /*20*/{isLaptop: false, isActive: true, serialNumber: "FNDZX12", brand:"DELL", model:"optiplex", processor: "Intel i5-4570 3.20Ghz", memoryRam: "32GB DDR3 1600Mhz", hardDisk: "500GB SSD", videoCard: "HD 5450 2GB GDDR3"},
        /*21*/{isLaptop: false, isActive: true, serialNumber: "N9237383", brand:"HP", model:"optiplex", processor: "Intel i5-4590 3.30Ghz", memoryRam: "16GB DDR3 1600Mhz", hardDisk: "500GB SSD", videoCard: "No"},
        /*22*/{isLaptop: false, isActive: true, serialNumber: "2UA4260P0G", brand:"HP", model:"optiplex", processor: "Intel i5-4570 3.20Ghz", memoryRam: "16GB DDR3 1333Mhz", hardDisk: "120GB SSD + 500GB HHD", videoCard: "No"},
        /*23*/{isLaptop: false, isActive: true, serialNumber: "JDM-002", brand:"Assembled", model:"Assembled", processor: "Intel i5-6500T 3.30Ghz", memoryRam: "16GB DDR3 1333Mhz", hardDisk: "254GB SSD", videoCard: "No"},
        /*24*/{isLaptop: false, isActive: true, serialNumber: "MJDLNHL", brand:"LENOVO", model:"optiplex", processor: "Intel i7-2600 3.40Ghz", memoryRam: "8GB DDR3 1333Mhz", hardDisk: "254GB SSD", videoCard: "No"},
        /*25*/{isLaptop: false, isActive: true, serialNumber: "N9071823", brand:"DELL", model:"optiplex", processor: "Intel i5 4590 3.30Ghz", memoryRam: "8GB DDR3 1600Mhz", hardDisk: "254GB SSD", videoCard: "No"},
        /*26*/{isLaptop: false, isActive: true, serialNumber: "JDM-003", brand:"DELL", model:"optiplex", processor: "AMD RYZEN 7 5700G", memoryRam: "8GB DDR4 2666Mhz", hardDisk: "254GB SSD", videoCard: "No"},
        /*27*/{isLaptop: false, isActive: true, serialNumber: "MJDYLTL", brand:"DELL", model:"optiplex", processor: "Intel i7-2600 3.40Ghz", memoryRam: "12 GB DDR3 1333 Mhz", hardDisk: "500GB SSD", videoCard: "No"},
        /*28*/{isLaptop: false, isActive: true, serialNumber: "MJCPNVE", brand:"LENOVO", model:"optiplex", processor: "Intel i7-2400 3.10Ghz", memoryRam: "16GB DDR3 1333Mhz", hardDisk: "120GB SSD + 2TB HHD", videoCard: "HD 5450"},
        /*29*/{isLaptop: false, isActive: true, serialNumber: "MJRTGTT", brand:"LENOVO", model:"optiplex", processor: "Intel i7-2600 3.40Ghz", memoryRam: "16GB DDR3 1333Mhz", hardDisk: "500GB SSD", videoCard: "No"},
        /*30*/{isLaptop: false, isActive: true, serialNumber: "3Q85502", brand:"DELL", model:"optiplex", processor: "Intel i5 4590 3.30Ghz", memoryRam: "16GB DDR3 1600Mhz", hardDisk: "3TB HHD", videoCard: "No"},
        /*31*/{isLaptop: false, isActive: true, serialNumber: "JDM-004",brand :"Assembled", model:"Assembled", processor: "AMD RYZEN 5 5600G", memoryRam: "8GB DDR4 2666Mhz", hardDisk: "254GB SSD", videoCard: "No"},
        /*32*/{isLaptop: false, isActive: true, serialNumber: "8CG8171W20", brand:"HP", model:"optiplex", processor: "Intel i5-8400 2.8Ghz", memoryRam: "8GB DDR4 2133Mhz", hardDisk: "254GB M.2 SSD", videoCard: "No"},
        /*33*/{isLaptop: false, isActive: true, serialNumber: "5929Y12", brand:"DELL", model:"optiplex", processor: "Intel i5-4570 3.20Gh", memoryRam: "32GB DDR3 1600Mhz", hardDisk: "500GB SSD", videoCard: "HD5450"},
        /*34*/{isLaptop: false, isActive: true, serialNumber: "MJCPNVR", brand:"LENOVO", model:"optiplex", processor: "Intel i5-2500 3.30Ghz", memoryRam: "12GB DDR3 1333Mhz", hardDisk: "120GB SSD + 1TB HHD", videoCard: "No"},
        /*35*/{isLaptop: false, isActive: false, serialNumber: "MXX0161C9F ", brand:"COMPAQ", model:"optiplex", processor: "", memoryRam: "", hardDisk: "", videoCard: "No"},
        /*36*/{isLaptop: false, isActive: true, serialNumber: "BHM2R22", brand:"DELL", model:"optiplex", processor: "Intel i5-3470 3.20Ghz", memoryRam: "8GB DDR3 1333Mhz", hardDisk: "512GB SSD", videoCard: "No"},
        /*37*/{isLaptop: false, isActive: true, serialNumber: "MXL4200D5X", brand:"LENOVO", model:"optiplex", processor: "Intel i5-4470 3.40Ghz", memoryRam: "16GB DDR3 1333Mhz", hardDisk: "500GB SSD", videoCard: "No"} 
    ])
};

//EMPLOYER INITIAL
const initEmployees = async () => {
    return await Employees.bulkCreate([
        /*01*/{firstName: 'jesus', lastName: 'arechider', age: 29, email: 'jarechider@jdmgroupcompany.com', password: '123', teamId: 3, positionId:11, computerId: 1, status: 'is_active', isValidated: true, role: 'normal'},
        /*02*/{firstName: 'nathaly', lastName: 'moya', age: 22, email: 'nmoya@jdmgroupcompany.com', password: '123', teamId: 1,  positionId:10, computerId: 2, status: 'is_active', isValidated: true, role: 'normal'},
        /*03*/{firstName: 'jacqueline', lastName: 'gonzales', age: 28, email: 'jgonzales@jdmgroupcompany.com', password: '123', teamId: 1,  positionId:15, computerId: 3, status: 'is_active', isValidated: true, role: 'normal'},
        /*04*/{firstName: 'karina', lastName: 'lobo', age: 70, email: 'klobo@jdmgroupcompany.com', password: '123', teamId: 1,  positionId:14, computerId: 4, status: 'is_active', isValidated: true, role: 'normal'},
        /*05*/{firstName: 'marialis', lastName: 'morotta', age: 24, email: 'mmorotta@jdmgroupcompany.com', password: '123', teamId: 18,  positionId:5, computerId: 5, status: 'is_active', isValidated: true, role: 'normal'},
        /*06*/{firstName: 'jose', lastName: 'plancharth', age: 26, email: 'jplancharth@jdmgroupcompany.com', password: '123', teamId: 6,  positionId:7, computerId: 6, status: 'is_active', isValidated: true, role: 'normal'},
        /*07*/{firstName: 'isabella', lastName: 'hernandez', age: 25, email: 'ihernandez@jdmgroupcompany.com', password: '123', teamId: 6,  positionId:5, computerId: 7, status: 'is_active', isValidated: true, role: 'normal'},
        /*08*/{firstName: 'francisco', lastName: 'herrera', age: 23, email: 'fherrera@jdmgroupcompany.com', password: '123', teamId: 4,  positionId:6, computerId: 8, status: 'is_active', isValidated: true, role: 'normal'},
        /*09*/{firstName: 'amirlenys', lastName: 'coronado', age: 32, email: 'acoronado@jdmgroupcompany.com', password: '123', teamId: 6,  positionId:6, computerId: 9, status: 'is_active', isValidated: true, role: 'normal'},
        /*10*/{firstName: 'maria laura', lastName: 'mezo', age: 22, email: 'mmezo@jdmgroupcompany.com', password: '123', teamId: 11,  positionId:6, computerId: 10, status: 'is_active', isValidated: true, role: 'normal'},
        /*11*/{firstName: 'danielys', lastName: 'rodriguez', age: 28, email: 'drodriguez@jdmgroupcompany.com', password: '123', teamId: 11,  positionId:5, computerId: 11, status: 'is_active', isValidated: true, role: 'normal'},
        /*12*/{firstName: 'yeifrank', lastName: 'rodriguez', age: 29, email: 'yrodriguez@jdmgroupcompany.com', password: '123', teamId: 11,  positionId:6, computerId: 12, status: 'is_active', isValidated: true, role: 'normal'},
        /*13*/{firstName: 'rafael', lastName: 'alcala', age: 29, email: 'ralcala@jdmgroupcompany.com', password: '123', teamId: 2,  positionId:16, computerId: 13, status: 'is_active', isValidated: true, role: 'normal'},
        /*14*/{firstName: 'cristobal', lastName: 'hare', age: 30, email: 'chare@jdmgroupcompany.com', password: '123', teamId: 4,  positionId:5, computerId: 14, status: 'is_active', isValidated: true, role: 'normal'},
        /*15*/{firstName: 'gabriel', lastName: 'centeno', age: 29, email: 'genteno@jdmgroupcompany.com', password: '123', teamId: 2,  positionId:16, computerId: 15, status: 'is_active', isValidated: true, role: 'normal'},
        /*16*/{firstName: 'jose', lastName: 'sandes', age: 27, email: 'jsandes@jdmgroupcompany.com', password: '123', teamId: 2,  positionId:16, computerId: 16, status: 'is_active', isValidated: true, role: 'normal'},
        /*17*/{firstName: 'edgar', lastName: 'ramirez', age: 29, email: 'eramirez@jdmgroupcompany.com', password: '123', teamId: 2,  positionId:16, computerId: 17, status: 'is_active', isValidated: true, role: 'normal'},
        /*18*/{firstName: 'valery', lastName: 'mottaban', age: 30, email: 'vmottaban@jdmgroupcompany.com', password: '123', teamId: 19,  positionId:17, computerId: 18, status: 'is_active', isValidated: true, role: 'normal'},
        /*19*/{firstName: 'valentina', lastName: 'plancharth', age: 10, email: 'vplancharth@jdmgroupcompany.com', password: '123', teamId: 17,  positionId:4, computerId: 19, status: 'is_active', isValidated: true, role: 'normal'},
        /*20*/{firstName: 'joaquina', lastName: 'valle', age: 30, email: 'jvalle@jdmgroupcompany.com', password: '123', teamId: 17,  positionId:4, computerId: 20, status: 'is_active', isValidated: true, role: 'normal'},
        /*21*/{firstName: 'andrea', lastName: 'brito', age: 30, email: 'abrito@jdmgroupcompany.com', password: '123', teamId: 17,  positionId:4, computerId: 21, status: 'is_active', isValidated: true, role: 'normal'},
        /*22*/{firstName: 'kairlys', lastName: 'ramirez', age: 30, email: 'kramirez@jdmgroupcompany.com', password: '123', teamId: 13,  positionId:4, computerId: 22, status: 'is_active', isValidated: true, role: 'normal'},
        /*23*/{firstName: 'patricia', lastName: 'rodriguez', age: 28, email: 'prodriguez@jdmgroupcompany.com', password: '123', teamId: 13,  positionId:5, computerId: 22, status: 'is_active', isValidated: true, role: 'normal'},
        /*24*/{firstName: 'barbara', lastName: 'hibirmas', age: 29, email: 'kramirez@jdmgroupcompany.com', password: '123', teamId: 1,  positionId:10, computerId: 23, status: 'is_active', isValidated: true, role: 'normal'},
        /*25*/{firstName: 'alejandra', lastName: 'matheus', age: 22, email: 'amatheus@jdmgroupcompany.com', password: '123', teamId: 9,  positionId:6, computerId: 24, status: 'is_active', isValidated: true, role: 'normal'},
        /*26*/{firstName: 'roxana', lastName: 'mendez', age: 27, email: 'rmendez@jdmgroupcompany.com', password: '123', teamId: 14,  positionId:6, computerId: 25, status: 'is_active', isValidated: true, role: 'normal'},
        /*27*/{firstName: 'kairlys', lastName: 'Ramirez', age: 30, email: 'kramirez@jdmgroupcompany.com', password: '123', teamId: 13,  positionId:4, computerId: 26, status: 'is_active', isValidated: true, role: 'normal'},
        /*28*/{firstName: 'kairlys', lastName: 'Ramirez', age: 30, email: 'kramirez@jdmgroupcompany.com', password: '123', teamId: 13,  positionId:4, computerId: 27, status: 'is_active', isValidated: true, role: 'normal'}
    ])
};


//> TEST
/*
try {
    initEmployees()
} catch (error) {
    console.log(error)
}
*/





const initValues = async () => {

    const dataPositions = await Positions.count();
    console.log(dataPositions)
    
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
                initEmployees();
            } catch (error) {
                console.log(error)
            };
        };
    } else {
        console.log("Data Existing")
    };
};

module.exports = initValues;
