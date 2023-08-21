// Promesas => 3 estados [pendiente], [resuelta], [rechazada]

let diceGame = (it) =>
  new Promise((resolve, reject) => {
    let numbers = [];
    for (let i = 0; i < it; i++) {
      let number = 1 + Math.floor(Math.random() * 6);
      numbers.push(number);
      if (number === 6) {
        return reject({
          error: true,
          message: "perdiste salio 6",
        });
      }
    }
    resolve({
      error: false,
      msg: numbers,
    });
  });

diceGame(10)
  .then((rta) => console.log(rta.msg))
  .catch((e) => console.log(e.message));
