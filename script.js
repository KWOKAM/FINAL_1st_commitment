const movies = [
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

const moviesContainer = document.getElementById("moviesContainer");
const searchInput = document.getElementById("searchInput");

function displayMovies(moviesList) {
  moviesContainer.innerHTML = "";
  moviesList.forEach((movie) => {
    const colDiv = document.createElement("div");
    colDiv.className = "col-md-3 movie-card";

    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = movie.image;
    img.alt = movie.title;
    img.className = "card-img-top";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    
    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = movie.title;
