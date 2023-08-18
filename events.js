import { EventEmitter } from "node:events";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("waterFull", () => {
  console.log("Please turn off the motor");
});
myEmitter.emit("waterFull");
