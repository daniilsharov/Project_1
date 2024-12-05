// Select the dropdown menu
const filterMenu = document.getElementById("filter");

// Select all movie items
const movieList = document.querySelectorAll(".movie");

// Get the reset button
const resetButton = document.getElementById("resetFilter");

// Listen for changes in the dropdown menu
filterMenu.addEventListener("change", (event) => {
    const selectedOption = event.target.value;
    const movies = extractMovieData(); 
    const sortedMovies = sortMovies(movies, selectedOption); 
    updateMovieList(sortedMovies); 
});

// Listen for the reset button click
resetButton.addEventListener("click", () => {
    // Reset the filter to the "Select" option
    filterMenu.selectedIndex = 0; 

    // Revert to the original order of movies
    const originalMovies = extractMovieData(); 
    updateMovieList(originalMovies); 
});

// Function to extract movie data (including the link)
function extractMovieData() {
    const movies = [];
    movieList.forEach((movie) => {
        const title = movie.querySelector("h3").innerText; 
        const year = parseInt(movie.querySelector(".details dd").innerText); 
        const link = movie.closest("a").getAttribute("href"); 
        movies.push({ element: movie.closest("a"), title, year, link }); 
    });
    return movies;
}

// Sorting function 
function sortMovies(movies, criteria) {
    if (criteria === "title-asc") {
        return movies.sort((a, b) => a.title.localeCompare(b.title));
    } else if (criteria === "title-desc") {
        return movies.sort((a, b) => b.title.localeCompare(a.title));
    } else if (criteria === "year-asc") {
        return movies.sort((a, b) => a.year - b.year);
    } else if (criteria === "year-desc") {
        return movies.sort((a, b) => b.year - a.year);
    }
}

// Function to update the movie list after sorting
function updateMovieList(sortedMovies) {
    const movieContainer = document.querySelector(".movies ol");
    const movieItems = sortedMovies.map(movie => movie.element); 
    
    // Clear current movie elements
    movieContainer.innerHTML = ""; 
    
    movieItems.forEach((movieItem) => {
        movieContainer.appendChild(movieItem); 
    });
}
