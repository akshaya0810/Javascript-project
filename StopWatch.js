let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let running = false;

function startStopwatch() {
    if (!running) {
        running = true;
        timer = setInterval(updateTime, 10);  // Update every 10ms
    }
}

function updateTime() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
    document.getElementById('milliseconds').textContent = formatMilliseconds(milliseconds);
}

function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}

function formatMilliseconds(ms) {
    return ms < 100 ? '0' + (ms / 10).toFixed(0) : ms;
}

function pauseStopwatch() {
    clearInterval(timer);
    running = false;
}

function resetStopwatch() {
    clearInterval(timer);
    running = false;
    hours = 0; minutes = 0; seconds = 0; milliseconds = 0;
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('milliseconds').textContent = '00';
    document.getElementById('lapTimes').innerHTML = '';  // Clear lap times
}

function lapTime() {
    const lapRecord = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatMilliseconds(milliseconds)}`;
    const lapTimesDiv = document.getElementById('lapTimes');
    const lap = document.createElement('div');
    lap.textContent = `Lap: ${lapRecord}`;
    lapTimesDiv.appendChild(lap);
}
