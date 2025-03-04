// Example movies data
const movies = [
    { title: "Inception", description: "A thief who steals corporate secrets through the use of dream-sharing technology.", image: "path/to/inception.jpg" },
    { title: "The Matrix", description: "A computer hacker learns from mysterious rebels about the true nature of his reality.", image: "path/to/matrix.jpg" },
    { title: "Interstellar", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", image: "path/to/interstellar.jpg" },
    {
        title: "Film A",
        image: "https://via.placeholder.com/300x450?text=Film+A",
        description: "Description du Film A."
    },
    {
        title: "Film B",
        image: "https://via.placeholder.com/300x450?text=Film+B",
        description: "Description du Film B."
    },
    {
        title: "Film C",
        image: "https://via.placeholder.com/300x450?text=Film+C",
        description: "Description du Film C."
    },
    {
        title: "Film D",
        image: "https://via.placeholder.com/300x450?text=Film+D",
        description: "Description du Film D."
    }
];

// Function to display movies
function displayMovies(moviesList) {
    const moviesContainer = document.getElementById('moviesContainer');
    moviesContainer.innerHTML = ''; // Clear previous content

    // Loop through each movie and create a card
    moviesList.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'col-md-4 movie-card';

        movieCard.innerHTML = `
            <div class="card">
                <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">${movie.description}</p>
                </div>
            </div>
        `;

        moviesContainer.appendChild(movieCard);
    });
}

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase(); // Get the search input value and convert to lowercase
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchInput) || // Filter by title
        movie.description.toLowerCase().includes(searchInput) // Filter by description
    );
    displayMovies(filteredMovies); // Display the filtered movies
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', handleSearch);

// Display movies on page load
document.addEventListener('DOMContentLoaded', () => {
    displayMovies(movies); // Display all movies initially
});
