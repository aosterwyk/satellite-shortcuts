
setInterval(() => {
    let timestamp = document.getElementById('UTCtime');
    const date = new Date();
    let newTimeString = `${date.toUTCString()}`;
    timestamp.innerText = newTimeString;
},1000);
