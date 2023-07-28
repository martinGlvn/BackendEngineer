// synchronous process code:

console.log("1");
console.log("2");
console.log("3");

// async process code
console.log("test async code");
setTimeout(() => {
  console.log("hi");
}, 1000);
setTimeout(() => {
  console.log("hi");
}, 5000);
setTimeout(() => {
  console.log("hi");
}, 2000);
