const names = [
    'Akshaya', 'Blessy', 'Sowmi', 'Raj', 'Rabin', 'Kethrin', 'Vigneswari', 'Nandhini'
];

function filterNames() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    const startWithChecked = document.getElementById('startWithCheck').checked;
    const autocompleteList = document.getElementById('autocomplete-list');

    // Clear previous suggestions
    autocompleteList.innerHTML = '';

    // Filter names based on input
    const filteredNames = names.filter(name => {
        const lowerCaseName = name.toLowerCase();
        
        // Check if the name matches the filter based on the checkbox state
 if (startWithChecked) {
            return lowerCaseName.startsWith(filter); // Only show names that start with the input
        } else {
            return lowerCaseName.includes(filter); // Show names that include the input
        }
    });

    // Generate autocomplete items
    filteredNames.forEach(name => {
        const item = document.createElement('div');
        item.textContent = name;
        item.classList.add('autocomplete-item');
        item.onclick = () => {
            input.value = name; // Set input value to clicked name
            autocompleteList.innerHTML = ''; // Clear suggestions
        };
        autocompleteList.appendChild(item);
    });
}
