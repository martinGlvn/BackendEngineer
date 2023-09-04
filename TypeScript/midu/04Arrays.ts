// Arrays => La inferencia de datos es estricta en los arrays...

// metodo1
const languajes: string[] = [];
languajes.push("C++");

// metodo2
const languajes2: Array<string> = [];
languajes2.push("C++");

// "x "or "y"
const languajes3: (string | number)[] = [];
languajes3.push("Rust");
