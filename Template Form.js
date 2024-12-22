document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;
    const passwordPattern = /^[a-zA-Z\d!@#$%^&*]{8,}$/;
    const messageDiv = document.getElementById("message");

    if (!passwordPattern.test(password)) {
        messageDiv.textContent = "Password must be at least 8 characters long, with 1 number and 1 special character.";
        messageDiv.style.color = "red";
        return;
    }

    // Add row to table
    const table = document.getElementById("userTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const nameCell = newRow.insertCell(0);
    const mailCell = newRow.insertCell(1);
    const passwordCell = newRow.insertCell(2);
    nameCell.textContent = name;

    // Make email clickable and open email client
    const emailLink = document.createElement('a');
    emailLink.href = `mailto:${mail}`;  // Corrected mailto syntax
    emailLink.textContent = mail;
    mailCell.appendChild(emailLink);

    // Hide actual password with asterisks
    
    // passwordcell.textContent=password;
    passwordCell.textContent = ".".repeat(password.length);
    passwordCell.classList.add('hidden-password');

    // Clear form and show success message
    document.getElementById("userForm").reset();
    messageDiv.textContent = "User added successfully!";
    messageDiv.style.color = "green";
});
