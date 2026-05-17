"use strict";

const movies = [
  { title: "Inception", director: "Christopher Nolan", year: 2010, synopsis: "A thief enters dreams." },
  { title: "The Matrix", director: "The Wachowskis", year: 1999, synopsis: "Reality is not what it seems." },
  { title: "Interstellar", director: "Christopher Nolan", year: 2014, synopsis: "A journey beyond Earth." }
];

function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find(m => m.title.toLowerCase() === title.toLowerCase());
      movie ? resolve(movie) : reject("Movie not found");
    }, 800);
  });
}

document.getElementById("movie-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = document.getElementById("title-input").value;

  try {
    const movie = await fetchMovie(title);
    displayMovie(movie);
  } catch (err) {
    showError(err);
  }
});

function displayMovie(movie) {
  if (!movie) return;

  document.getElementById("movie-title").textContent = movie.title;
  document.getElementById("movie-director").textContent = "Director: " + movie.director;
  document.getElementById("movie-year").textContent = "Year: " + movie.year;
  document.getElementById("movie-synopsis").textContent = movie.synopsis;
  document.getElementById("movie-info").style.display = "block";
}

function showError(message) {
  document.getElementById("error-message").textContent = message;
}