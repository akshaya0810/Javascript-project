// Create a function to generate the table
function createTable() {
    const table = document.createElement('table');
    
 // Create first row
    const row1 = document.createElement('tr');
    const cell1_1 = document.createElement('th');
    cell1_1.innerText = 'Name';
    cell1_1.style.backgroundColor = 'skyblue';
    cell1_1.style.padding="5px";
    cell1_1.style.textAlign="center";
    row1.appendChild(cell1_1);

    const cell1_2 = document.createElement('th');
    cell1_2.innerText = 'Department';
    cell1_2.style.backgroundColor = "skyblue";
    cell1_2.style.padding="5px";
    cell1_2.style.textAlign="center";
    row1.appendChild(cell1_2);

    const cell1_3 = document.createElement('th');
    cell1_3.innerText = 'Subject';
    cell1_3.style.backgroundColor = 'skyblue';
    cell1_3.style.padding="5px";
    cell1_3.style.textAlign="center";
    row1.appendChild(cell1_3);
    table.appendChild(row1);

    // Create second row
    const row2 = document.createElement('tr');
    const cell2_1 = document.createElement('td');
    cell2_1.innerText = 'Akshaya';
    cell2_1.style.backgroundColor = '#EEEDEB';
    row2.appendChild(cell2_1);

    const cell2_2 = document.createElement('td');
    cell2_2.innerText = 'FE';
    cell2_2.style.backgroundColor = '#EEEDEB';
    row2.appendChild(cell2_2);

    const cell2_3 = document.createElement('td');
    cell2_3.innerText = 'Js';
    cell2_3.style.backgroundColor = '#EEEDEB';
    row2.appendChild(cell2_3);
    table.appendChild(row2);

    // Create third row
    const row3 = document.createElement('tr');
    const cell3_1 = document.createElement('td');
    cell3_1.innerText = 'Blessy';
    cell3_1.style.backgroundColor = '#FFDDC1';
    row3.appendChild(cell3_1);

    const cell3_2 = document.createElement('td');
    cell3_2.innerText = 'FE';
    cell3_2.style.backgroundColor = '#FFDDC1';
    row3.appendChild(cell3_2);

    const cell3_3 = document.createElement('td');
    cell3_3.innerText = 'Html';
    cell3_3.style.backgroundColor = '#FFDDC1';
    row3.appendChild(cell3_3);
    table.appendChild(row3);

     // Create fourth row
     const row4 = document.createElement('tr');
     const cell4_1 = document.createElement('td');
     cell4_1.innerText = 'Sowmi';
     cell4_1.style.backgroundColor = '#FFABAB';
     row4.appendChild(cell4_1);
 
     const cell4_2 = document.createElement('td');
     cell4_2.innerText = 'FE';
     cell4_2.style.backgroundColor = '#FFABAB';
     row4.appendChild(cell4_2);
 
     const cell4_3 = document.createElement('td');
     cell4_3.innerText = 'Css';
     cell4_3.style.backgroundColor = '#FFABAB';
     row4.appendChild(cell4_3);
     table.appendChild(row4);
 

    // Append the table to the body
    document.body.appendChild(table);
}

// Call the function to create the table
createTable();
