const express = require("express");
const movies = require("./movies.json");
const app = express();
const PORT = 3000;
app.disable("x-powered-by");

// Todos los recursos que sean MOVIES se identifican con /movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

// Recuperamos 1 pelicula por id
app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === id);
  if (movie) return res.json(movie);
  res.status(404).json({ message: "movie not found" });
});

app.listen(PORT, (req, res) => {
  console.log(`Welcome sv listening port : ${PORT}`);
});
