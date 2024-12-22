let data = [];
let currentIndex = 0;

function addRow() {
    const tableBody = document.getElementById('table-body');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${currentIndex + 1}</td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td contenteditable="true"></td>
        <td>
            <button onclick="saveData(this)">Save</button>
            <button onclick="deleteRow(this)">Delete</button>
        </td>
    `;

    tableBody.appendChild(newRow);
    document.getElementById('data-table').style.display = 'table'; // Show table on first row addition
    document.getElementById('add-button').style.display = 'none';  // Hide the Add button
    currentIndex++;
}

function saveData(button) {
    const row = button.parentElement.parentElement;
    const cells = row.querySelectorAll('td');

    const name = cells[1].innerText.trim();
    const email = cells[2].innerText.trim();
    const phno = cells[3].innerText.trim();

    const emailPattern = /@gmail/;
    const phonePattern = /^[0-9]+$/;

    if (!name || !email || !phno) {
        alert('Please fill in all fields.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid Gmail address (e.g., user@gmail.com)');
        return;
    }

    if (!phonePattern.test(phno)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    data.push({ name, email, phno });
    cells[4].innerHTML = `
        <button onclick="editRow(this)">Edit</button>
        <button onclick="deleteRow(this)">Delete</button>
    `;

    document.getElementById('add-button').style.display = 'block'; // Show Add button again
}

function editRow(button) {
    const row = button.parentElement.parentElement;
    const cells = row.querySelectorAll('td');

    cells[1].setAttribute('contenteditable', 'true');
    cells[2].setAttribute('contenteditable', 'true');
    cells[3].setAttribute('contenteditable', 'true');

    cells[4].innerHTML = `
        <button onclick="saveData(this)">Save</button>
        <button onclick="deleteRow(this)">Delete</button>
    `;

    document.getElementById('add-button').style.display = 'none'; // Hide Add button during editing
}

function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();

    const rows = document.querySelectorAll('tbody tr');
    currentIndex = 0;
    rows.forEach((row, index) => {
        row.querySelector('td').innerText = index + 1;
        currentIndex = index + 1;
    });

    if (rows.length === 0) {
        document.getElementById('data-table').style.display = 'none';
        currentIndex = 0;
    }

    document.getElementById('add-button').style.display = 'block'; // Show Add button when a row is deleted
}