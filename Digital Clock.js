function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12;  // 12-hour format
    const paddedhours = hours < 10 ? '0' + hours : hours;
    const paddedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const paddedSeconds = seconds < 10 ? '0' + seconds : seconds;
    
    document.getElementById('hours').textContent = paddedhours;
    document.getElementById('minutes').textContent = paddedMinutes;
    document.getElementById('seconds').textContent = paddedSeconds;
    document.getElementById('ampm').textContent = ampm;

    // Display date
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = dayNames[now.getDay()];
    const month = monthNames[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    document.getElementById('date-display').textContent = `${date} ${month}, ${year} [${day}]`;
}

// Initial call and update every second
setInterval(updateTime, 1000);
updateTime();
