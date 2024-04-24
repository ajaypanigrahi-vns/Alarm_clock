// Take audio file and play it 
let alarmSound = new Audio("sound.m4a")

// Set the alarm interval
let alarmInterval

// Update the time every second
function updateTime() {
    // Get the current time
    const now = new Date();
    // Format the time as a string
    const timeElement = document.getElementById('time');
    // Update the time in the DOM
    const timeString = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    document.getElementById('time').innerHTML = timeString;
}

// Set the alarm
function setAlarm() {
    // Get the alarm time from the input field
    const alarmTimeInput = document.getElementById('alarmTime');
    const alarmTime = alarmTimeInput.value;
    // Check if the alarm time is valid
    const now = new Date();
    // If the alarm time is valid, set the alarm
    const alarmDateTime = new Date(now.toDateString() + ' ' + alarmTime);

    alarmInterval = setInterval(function() {
        // Check if the current time matches the alarm time
        const currentTime = new Date();
        if (currentTime.getHours() === alarmDateTime.getHours() &&
            currentTime.getMinutes() === alarmDateTime.getMinutes()) {
            alarmSound.play()
        }
    }, 1000);
}

// Cancel the alarm
function cancelAlarm() {
    // Stop the audio file from playing
    alarmSound.pause();
    // Reset the current time of the audio file to the beginning
    alarmSound.currentTime = 0;
    //Clear the interval to stop the alarm from ringing 
    clearInterval(alarmInterval);
}
// Start the clock
setInterval(updateTime, 1000);