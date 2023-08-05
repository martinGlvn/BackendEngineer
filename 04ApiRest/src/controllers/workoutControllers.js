const workoutService = require("../services/workoutService");

const getAllWorkOuts = (req, res) => {
  const allWorkOuts = workoutService.getAllWorkOuts();
  res.send("Get all workouts");
};

const getOneWorkout = (req, res) => {
  const workout = workoutService.getOneWorkout(req.params.workoutId);
  res.send(`Get all workouts ${req.params.workoutId}`);
};

const createNewWorkout = (req, res) => {
  const createdNewWorkout = workoutService.createNewWorkout(
    req.params.workoutId
  );
  res.send(`Get all workouts ${req.params.workoutId}`);
};

const updateOneWorkout = (req, res) => {
  const updatedWorkout = workoutService.updateOneWorkout(req.params.workoutId);
  res.send(`Update workout ${req.params.workoutId}`);
};

const deleteOneWorkout = (req, res) => {
  workoutService.deleteOneWorkout(req.params.workoutId);
  res.send(`Delete workout ${req.params.workoutId}`);
};

module.exports = {
  getAllWorkOuts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
