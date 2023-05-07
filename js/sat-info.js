// satellites
const satellites = {
    "AO-91": { 
        name: "AO-91",
        altName: "",
        uplink: "435.250",
        uplinkTone: "67 Hz (CTCSS)",
        downlink: "145.960",
        downlinkTone: "",
        info: ""
    },
    "AO-92": {
        name: "AO-92",
        altName: "",
        uplink: "435.350",
        uplinkTone: "",
        downlink: "145.880",
        downlinkTone: "",
        info: ""
    },
    "SO-50": {
        name: "SO-50",
        altName: "",
        uplink: "145.850",
        uplinkTone: "67 Hz (CTCSS)",
        downlink: "436.795",
        downlinkTone: "",
        info: "SO-50 also has a 10 minute timer that must be armed before use. Transmit a 2 second carrier with a CTCSS tone of 74.4 Hz to arm the timer."
    },
    "PO-101": {
        name: "PO-101",
        altName: "",
        uplink: "437.500",
        uplinkTone: "141.3 Hz (CTCSS)",
        downlink: "145.900",
        downlinkTone: "",
        info: "See tweets below for schedule"
    },
    "CAS-3H": {
        name: "CAS-3H",
        altName: "LilacSat-2",
        uplink: "144.350",
        uplinkTone: "",
        downlink: "437.200",
        downlinkTone: "",
        satellitesURL: "",
        info: ""
    },
    "IO-86": {
        name: "IO-86",
        altName: "LAPAN-A2",
        uplink: "145.880",
        uplinkTone: "88.5 Hz (CTCSS)",
        downlink: "435.880",
        downlinkTone: "",
        info: ""
    },
    "AO-27": {
        name: "AO-27",
        altName: "",
        uplink: "145.850",
        uplinkTone: "",
        downlink: "436.795",
        downlinkTone: "",
        info: ""
    },
    "ISS": {
        name: "ISS",
        altName: "International Space Station",
        uplink: "145.990",
        uplinkTone: "67 Hz (CTCSS)",
        downlink: "437.800",
        downlinkTone: "",
        amsatPage: "",
        info: ""
    },
    "UVSQ-SAT": {
        name: "UVSQ-SAT",
        altName: "",
        uplink: "145.905",
        uplinkTone: "",
        downlink: "437.020",
        downlinkTone: "",
        info: ""
    },
    "FO-118": {
        name: "FO-118",
        altName: "CAS-5A",
        uplink: "145.925",
        uplinkTone: "",
        downlink: "435.600",
        downlinkTone: "",
        info: ""
    },
    "Tevel": {
        name: "Tevel",
        altName: "Space-X",
        uplink: "145.970",
        uplinkTone: "",
        downlink: "436.400",
        downlinkTone: "",
        info: "Tevel 1-8"
    },
    "CAS-7A": {
        name: "CAS-7A",
        altName: "",
        uplink: "145.950",
        uplinkTone: "",
        downlink: "435.455",
        downlinkTone: "",
        info: ""
    }
    // "CAS-7C": {
    //     name: "CAS-7C",
    //     altName: "",
    //     uplink: "145.900",
    //     uplinkTone: "",
    //     downlink: "435.690",
    //     downlinkTone: "",
    //     info: "CW beacon 435.715 MHz"
    // }
}

/*
": {
        name: "
        altName: "",
        uplink: "
        uplinkTone: "
        downlink: "
        downlinkTone: "",
        info: ""
    },
*/

// create buttons

function updateButton(sat) {
    let satName = document.getElementById('satName');
    satName.innerHTML = `<i class="fas fa-satellite-dish"></i> ${satellites[sat].name}`;
    // check for alternate names
    if(satellites[sat].altName.length > 1) {
        satName.innerHTML += ` (${satellites[sat].altName})`;
    }

    document.getElementById('satUplink').innerHTML = `<i class="fas fa-arrow-up"></i> ${satellites[sat].uplink}`;
    document.getElementById('satDownlink').innerHTML = `<i class="fas fa-arrow-down"></i> ${satellites[sat].downlink}`;
    
    // check for uplink tone
    let uplinkTone = "No tone";
    if(satellites[sat].uplinkTone.length > 1) {
        uplinkTone = satellites[sat].uplinkTone;
    }
    document.getElementById('satUplinkTone').innerHTML = `<i class="fas fa-wave-square"></i> ${uplinkTone}`;        
    
    // check for downlink tone
    let downlinkTone = "No tone";
    if(satellites[sat].downlinkTone.length > 1) {
        downlinkTone = satellites[sat].downlinkTone;
    }    
    document.getElementById('satDownlinkTone').innerHTML = `<i class="fas fa-wave-square"></i> ${downlinkTone}`;    

    if(sat == "PO-101") { document.getElementById('po-101-twitter').hidden = false; }   
    else { document.getElementById('po-101-twitter').hidden = true; }

    // check for info
    let satInfo = "";
    if(satellites[sat].info.length > 1) {
        document.getElementById('satInfo').innerHTML = `<i class="fas fa-info-circle"></i> ${satellites[sat].info}`;
    }
    else {
        document.getElementById('satInfo').innerHTML = '';
    }
}

var satButtons = document.getElementById('satButtons');
for(let sat in satellites) {
    // console.log(`Adding button for ${sat}`);
    satButtons.innerHTML += `<button type="button" class="me-2 my-2 btn btn-primary" id="${sat}">${sat}</button>`;
}

for(let sat in satellites) {
    // console.log(`Adding listener for ${sat}`);
    document.getElementById(sat).addEventListener('click', () => { updateButton(sat); });
}


