const photosPerPage = 8; // 4 rows * 2 photos per row = 8 photos per page
let currentPage = 1; // Start at page 1

// Fetch photos with pagination
function fetchPhotos(page) {
    showSpinner();

    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then(data => {
        
            document.getElementById('photos').innerHTML = '';

            
            setTimeout(() => {
    
                const startIndex = (page - 1) * photosPerPage;
                const endIndex = page * photosPerPage;

                const paginatedPhotos = data.slice(startIndex, endIndex);
                displayPhotos(paginatedPhotos); 
                hideSpinner(); 
            }, 1000); 
        })
        .catch(error => {
            console.error('Error:', error);
            hideSpinner(); // Hide spinner even if an error occurs
        });
}

function displayPhotos(photos) {
    const photosContainer = document.getElementById('photos');
    photosContainer.innerHTML = ''; // Clear previous photos

    photos.forEach((photo, index) => {
        const photoBox = document.createElement('div');
        photoBox.classList.add('photo-box');

        const colorClass = (index % 2 === 0) ? 'box-color-1' : 'box-color-2';
        photoBox.classList.add(colorClass);

        photoBox.innerHTML = `
            <img src="${photo.thumbnailUrl}" alt="Photo" class="photo-thumbnail">
        `;
        photosContainer.appendChild(photoBox);
    });
}

function showSpinner() {
    document.getElementById('spinner').style.display = 'block';
}

function hideSpinner() {
    document.getElementById('spinner').style.display = 'none';
}

function nextPage() {
    
    document.getElementById('photos').innerHTML = '';
    showSpinner();
    currentPage++;
    fetchPhotos(currentPage);
}

fetchPhotos(currentPage);