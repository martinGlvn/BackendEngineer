const express = require("express");
const crypto = require("crypto");
const z = require("zod"); //validate data types
const movies = require("./movies.json");
const app = express();
const PORT = 3000;
app.use(express.json());
app.disable("x-powered-by");

// Todos los recursos que sean MOVIES se identifican con /movies
app.get("/movies", (req, res) => {
  const { genre } = req.query;
  if (genre) {
    const filteredMovies = movies.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLocaleLowerCase())
    );
    return res.json(filteredMovies);
  }
  res.json(movies);
});

// Recuperamos 1 pelicula por id
app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === id);
  if (movie) return res.json(movie);
  res.status(404).json({ message: "movie not found" });
});

//
app.post("/movies", (req, res) => {
  const result = validateMovie(req.body);
  if (result.error) {
    return res.status(400).json({ error: result.error.message });
  }
  const newMovie = {
    id: crypto.randomUUID(), //uuid => universal unique identifier
    ...result.data,
  };
  movies.push(newMovie);
});

app.listen(PORT, (req, res) => {
  console.log(`Welcome sv listening port : ${PORT}`);
});
