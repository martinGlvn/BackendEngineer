// Module "OS"
const os = require("node:os");
console.log("Info System Operation");
console.log("----------------------");

console.log("Name System Operation", os.platform());
console.log("Version the System Operation", os.release());
console.log("Architect", os.arch());
console.log("CPUs", os.cpus());
console.log("Free Memory", os.freemem() / 1024 / 1024);
console.log("Total Memory", os.totalmem() / 1024 / 1024);
console.log("Computer Time Ejecute", os.uptime());
