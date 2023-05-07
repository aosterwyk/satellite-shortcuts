// timestamp timer
setInterval(() => {
    const date = new Date();   
    let currentHour = ('0' + date.getUTCHours()).slice(-2);
    let currentMin = ('0' + date.getUTCMinutes()).slice(-2);
    let currentSec = ('0' + date.getUTCSeconds()).slice(-2);
    const formattedTime = date.toLocaleTimeString("en-US", {
        timeZone: "UTC",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    let timestamp = document.getElementById('UTCTime');
    timestamp.innerText = formattedTime;

    const formattedDate = date.toLocaleDateString("en-US", {
        timeZone: "UTC",
        year: "numeric",
        month: "long",
        day: "2-digit"
    });
    let datestamp = document.getElementById('UTCDate');
    datestamp.innerText = `${formattedDate} (UTC)`;    
},1000);

document.getElementById('QRZButton').addEventListener('click', () => {
    const qrzCallsign = document.getElementById('QRZCallsign');
    if(qrzCallsign.value.length > 1) {
        window.open(`https://www.qrz.com/db/${qrzCallsign.value}`);
    }
});
