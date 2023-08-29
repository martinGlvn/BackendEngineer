const EventEmitter = require("events");
const emmiter = new EventEmitter();

emmiter.on("alarm", (arg1, arg2) => {
  console.log(arg1, arg2s);
});
emmiter.on("alarm", () => {
  console.log("alarm");
});
emmiter.on("notification", () => {
  console.log("alarm 2");
});

emmiter.emit("alarm", "9AM", "12AM");
