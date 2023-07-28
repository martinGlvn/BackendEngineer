const os = require("os");

console.log(os.userInfo());
console.log(os.uptime());
console.log(os.freemem());
console.log(os.totalmem());

console.table({
  os: os.platform(),
  version: os.version(),
  totalMemory: os.totalmem(),
});
