const Workout = require("../database/Workout");

const getAllWorkOuts = () => {
  const allWorkouts = Workout.getAllWorkout();
  return allWorkouts;
};
const getOneWorkout = () => {
  return;
};
const createNewWorkout = () => {
  return;
};
const updateOneWorkout = () => {
  return;
};
const deleteOneWorkout = () => {
  return;
};

module.export = {
  getAllWorkOuts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
