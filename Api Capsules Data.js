// Fetch the data from the SpaceX API
fetch('https://api.spacexdata.com/v3/capsules')
    .then(response => response.json())
    .then(data => {
        // Select the table body
        const tableBody = document.querySelector('#capsulesTable tbody');

        // Loop through the data and create rows for each capsule
        data.forEach(capsule => {
           
            const row = document.createElement('tr');
            const NumberCell = document.createElement('td');
            NumberCell.textContent = capsule.capsule_id;
            row.appendChild(NumberCell);

            const NameCell = document.createElement('td');
            NameCell.textContent = capsule.capsule_serial || 'N/A';
            row.appendChild(NameCell);

            const capsuleSerialCell = document.createElement('td');
            capsuleSerialCell.textContent = capsule.details || 'N/A';
            row.appendChild(capsuleSerialCell);

            const capsuleIdCell = document.createElement('td');
            capsuleIdCell.textContent = capsule.original_launch || 'N/A';
            row.appendChild(capsuleIdCell);

            const originalLaunchCell = document.createElement('td');
            originalLaunchCell.textContent = capsule.original_launch_unix || 'N/A';
            row.appendChild(originalLaunchCell);
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
