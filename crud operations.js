let data = [];
function addData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gmailPattern = /@gmail/;
    const phno = document.getElementById('phno').value;
    const phonePattern = /^[0-9]+$/;

    if (name && email && phno) {
        if (!gmailPattern.test(email)) {
            alert('Please enter a valid Gmail address (e.g., user@gmail.com)');
            return; 
        }

        if (!phonePattern.test(phno)) {
            alert('Please enter a valid 10-digit phone number');
            return; 
        }

        const userData = { name, email, phno };
        
        // Check if we're in edit mode or adding new data
       if (document.getElementById('edit-index').value) {
            const index = document.getElementById('edit-index').value;
            data[index] = userData;  // Update existing data
            document.getElementById('edit-index').value = ''; 
        } else {
            data.push(userData);  // Add new data
        }
        
        displayData();
        resetForm();
    } else {
        alert('Please fill all the fields');
    }
}

function displayData() {
    const tableBody = document.getElementById('table-body');
    const thead = document.querySelector('thead');
    tableBody.innerHTML = '';

    if (data.length > 0) {
        thead.style.display = 'table-header-group';  
    } else {
        thead.style.display = 'none';  
    }

    data.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phno}</td>
            <td>
                <button onclick="editData(${index})">Edit</button>
                <button onclick="deleteData(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function editData(index) {
    const userData = data[index];
    document.getElementById('name').value = userData.name;
    document.getElementById('email').value = userData.email;
    document.getElementById('phno').value = userData.phno;
    document.getElementById('edit-index').value = index; 

}

function deleteData(index) {
    data.splice(index, 1);
    displayData();
}

function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phno').value = '';
   
}
