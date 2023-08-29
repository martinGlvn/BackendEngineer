function async() {
  setTimeout(() => {
    console.log("2");
  }, 1000);
}
console.log("1");
async();
console.log("3");
