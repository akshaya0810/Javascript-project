let index = 0;
let count = 0;
const positions = [];

// Fill positions array with grid coordinates
for (let i = 0; i < 500; i += 25) {
    for (let j = 0; j < 500; j += 25) {
        positions.push([i, j]);
    }
}

function addCircle() {
    const inputValue = document.getElementById('inputBox').value;
    if (inputValue !== "") {
        const randomIndex = Math.floor(Math.random() * positions.length);
        const [top, left] = positions[randomIndex];
        const newDiv = document.createElement('div');

        newDiv.className = "circle";
        newDiv.style.top = `${top}px`;
        newDiv.style.left = `${left}px`;
        newDiv.setAttribute("selected", "false");
        newDiv.setAttribute("value", inputValue); // Store the value in an attribute
        newDiv.innerText = index + 1;

        // Add click event dynamically
        newDiv.onclick = function () {
            clicked(newDiv, parseInt(inputValue));
        };

        document.getElementById('points').appendChild(newDiv);
        positions.splice(randomIndex, 1); // Remove the used position

        // Add row to the table
        const tbody = document.getElementById('tbody');
        const row = tbody.insertRow();
        row.innerHTML = `<td>${index + 1}</td><td>${inputValue}</td>`;

        index++;
        // Clear the input box after adding the point
        document.getElementById('inputBox').value = "";
    }
}

function clicked(element, value) {
    const isSelected = element.getAttribute("selected") === "true";

    if (isSelected) {
        count -= value;  // Subtract value from count
        element.style.backgroundColor = "red";
        element.setAttribute("selected", "false");
    } else {
        count += value;  // Add value to count
        element.style.backgroundColor = "greenyellow";
        element.setAttribute("selected", "true");
    }

    // Update the total count
    document.getElementById("countBox").innerText = count;
}