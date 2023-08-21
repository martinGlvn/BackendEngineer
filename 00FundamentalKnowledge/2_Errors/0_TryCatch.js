printCharacterStats(4);
printCharacterStats("ten");
printCharacterStats(10);

function printCharacterStats(level) {
  try {
    if (isNaN(level)) {
      throw new Error("Parameter is not a number!");
    }
  } catch (err) {
    console.log(`Your character is level ${level}!`);
  }
}
