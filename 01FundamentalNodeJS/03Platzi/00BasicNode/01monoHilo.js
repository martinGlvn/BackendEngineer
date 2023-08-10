//
console.log("Hello World");

let i = 0;
setInterval(() => {
  i++;
  console.log(i);
  if (i === 2) console.log("error");
}, 1000);
