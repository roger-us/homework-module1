function currentTime() {
    //declare variables
    var d = new Date(); //Get current date
    var hr = d.getHours(); //Get current hours
    var min = d.getMinutes(); //Get current minutes
    var sec = d.getSeconds(); //Get current seconds 
    var ampm; //Declare empty variable to store AM or PM

    //Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }
    //Add 0 to single digits for minutes
    if (min < 10) {
        min = "0" + min;
    }

    //Determine AM or PM string
    if (hr == 12) {
        ampm = "PM"; //Set to PM
    } else if (hr > 12) {
        hr -= 12; //Detuct 12 from hours great than 12 (military time)
        ampm = "PM"; //Set to PM
    } else {
        ampm = "AM"; //Set to AM
    }
    var utchr = d.getUTCHours(); //Get current Greenwich Mean Time (GMT)
    
    if (utchr > 12) {
        utchr -= 12;
    }

    var timeDiff = utchr - hr; //To store time difference between GMT hour and local hour
    var adjTimeDiff; //To store time difference converted to positive number

    if (timeDiff < 0) {
        adjTimeDiff = timeDiff + 12;
    } else {
        adjTimeDiff = timeDiff;
    }

    var timeZone; //To store the 4 time zone (PT,MT,CT,ET)
    if (adjTimeDiff == 4) {
        timeZone = " ET";
    } else if (adjTimeDiff == 5) {
        timeZone = " CT";
    } else if (adjTimeDiff == 6) {
        timeZone = " MT";
    } else if (adjTimeDiff == 7) {
        timeZone = " PT";
    }

    //Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
    //Display current local time and time zone on HTML elements
    document.getElementById("clock").innerText = time;
    setInterval(currentTime, 1000);
}
    //Initial run of time data function
    currentTime();