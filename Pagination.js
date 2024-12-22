const postsPerPage = 10; // Number of posts to display per page
let currentPage = 1; // Start at page 1
let totalPages = 10; // Set total pages as 10 for this demo
let paginationLimit = 5; // How many pagination buttons to show at a time

// Fetch posts with pagination
function fetchPosts(page) {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            // Filter posts to show only user ids 1 to 10
            const filteredPosts = data.filter(post => post.userId >= 1 && post.userId <= 10);

            // Calculate start and end index based on current page and posts per page
            const startIndex = (page - 1) * postsPerPage;
            const endIndex = page * postsPerPage;

            // Get the posts for the current page
            const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
            displayPosts(paginatedPosts, startIndex); // Function to display the posts, with a serial number
            displayPagination(); // Function to display pagination controls
        })
        .catch(error => console.error('Error:', error));
}

// Display posts on the page with serial numbers for each post
function displayPosts(posts, startIndex) {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; // Clear previous posts

    // Get the first user's ID to display at the top
    const userId = posts[0]?.userId || '';

    // Display the user ID once at the top
    const userIdElement = document.createElement('h2');
    userIdElement.textContent = `User ID: ${userId}`;
    postsContainer.appendChild(userIdElement);

    let serialNumber = 1; // Starting serial number for the page

    // Now display the posts under the user ID
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post-box'); // Add a class for box styling
        postElement.innerHTML = `
            <h3>Serial: ${serialNumber}. ${post.title}</h3>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
        serialNumber++; // Increment serial number for the next post
    });
}

// Display pagination controls with sliding effect and arrow keys
function displayPagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = ''; // Clear previous pagination controls

    // Create a sliding pagination container
    const slider = document.createElement('div');
    slider.classList.add('pagination-slider');

    // Left arrow button (Previous)
    const leftArrow = document.createElement('button');
    leftArrow.innerHTML = '&larr;'; // Left arrow symbol
    leftArrow.classList.add('arrow-button');
    leftArrow.disabled = currentPage === 1; // Disable if on the first page
    leftArrow.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            fetchPosts(currentPage);
        }
    });
    slider.appendChild(leftArrow);

    // Calculate the range of pagination buttons to show
    const startPage = Math.floor((currentPage - 1) / paginationLimit) * paginationLimit + 1;
    const endPage = Math.min(startPage + paginationLimit - 1, totalPages);

    // Create buttons for each page within the current range (e.g., 1-5, 6-10)
    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('pagination-button');
        if (i === currentPage) {
            button.classList.add('active'); // Highlight the active page button
        }

        button.addEventListener('click', () => {
            currentPage = i;
            fetchPosts(currentPage);
        });

        slider.appendChild(button);
    }

    // Right arrow button (Next)
    const rightArrow = document.createElement('button');
    rightArrow.innerHTML = '&rarr;'; // Right arrow symbol
    rightArrow.classList.add('arrow-button');
    rightArrow.disabled = currentPage === totalPages; // Disable if on the last page
    rightArrow.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            fetchPosts(currentPage);
        }
    });
    slider.appendChild(rightArrow);

    paginationContainer.appendChild(slider);
}

// Initial call to fetch the first page of posts
fetchPosts(currentPage);
