let totalUnits = 0;
let totalCost = 0;
const unitPrice = 30; // 1 unit = 30 Rs
let appliances = [];

function addAppliance(type, imageOffSrc, imageOnSrc = null) {
    const id = appliances.length; // Unique ID for each appliance instance
    appliances.push({
        type: type,
        units: 0,
        seconds: 0,
        isActive: false,
        interval: null,
        imageOff: imageOffSrc,
        imageOn: imageOnSrc // Store the image for the on state (only for bulb)
    });

    // Add the appliance row to the DOM
    const applianceList = document.getElementById('appliance-list');
    const row = document.createElement('div');
    row.classList.add('appliance-row');
    row.setAttribute('id', `appliance-${id}`);

    // Insert image and other appliance details into the row using separate divs
    row.innerHTML = `
    <div class="appliance-img">
        <img src="${imageOffSrc}" alt="${type}" id="image-${id}">
    </div>
    <div class="appliance-info">
        <span>${type}</span>
    </div>
    <div class="appliance-switch">
        <label class="switch">
            <input type="checkbox" onclick="toggleAppliance(${id})">
            <span class="slider"></span>
        </label>
    </div>
    <div class="appliance-timer">
        <span class="timer" id="timer-${id}">0 sec</span>
    </div>
    <div class="appliance-units">
        <span class="units" id="units-${id}">0 units</span>
    </div>
    `;

    applianceList.appendChild(row);
}


function toggleAppliance(id) {
    const appliance = appliances[id];
    const timerDisplay = document.getElementById(`timer-${id}`);
    const unitsDisplay = document.getElementById(`units-${id}`);
    const imageDisplay = document.getElementById(`image-${id}`);

    // Check if it's the bulb to change images
    if (appliance.type === 'Bulb') {
        if (appliance.isActive) {
            clearInterval(appliance.interval);
            appliance.isActive = false;
            imageDisplay.src = appliance.imageOff; // Set the image to off
        } else {
            appliance.isActive = true;
            imageDisplay.src = appliance.imageOn; // Set the image to on
            appliance.interval = setInterval(() => {
                appliance.seconds++;
                appliance.units = (appliance.seconds / 60).toFixed(2); // 1 unit per 60 seconds

                timerDisplay.textContent = `${appliance.seconds} sec`;
                unitsDisplay.textContent = `${appliance.units} units`;

                updateTotal();
            }, 1000);
        }
    } else {
        // For other appliances, just track the time without changing the image
        if (appliance.isActive) {
            clearInterval(appliance.interval);
            appliance.isActive = false;
        } else {
            appliance.isActive = true;
            appliance.interval = setInterval(() => {
                appliance.seconds++;
                appliance.units = (appliance.seconds / 60).toFixed(2); // 1 unit per 60 seconds

                timerDisplay.textContent = `${appliance.seconds} sec`;
                unitsDisplay.textContent = `${appliance.units} units`;

                updateTotal();
            }, 1000);
        }
    }
}

function updateTotal() {
    totalUnits = appliances.reduce((acc, appliance) => acc + parseFloat(appliance.units), 0);
    totalCost = totalUnits * unitPrice;

    document.getElementById('total-units').textContent = `${totalUnits.toFixed(2)} units`;
    document.getElementById('total-cost').textContent = `Rs. ${totalCost.toFixed(2)}`;
}
