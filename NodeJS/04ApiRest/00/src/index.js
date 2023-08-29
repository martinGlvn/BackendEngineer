const express = require("express");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const app = express();
const PORT = 3000;

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`sv running on port ${PORT}🚀`);
});
