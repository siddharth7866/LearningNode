const fs = require("fs");

fs.readFile("sid.txt", "utf-8", (err, data) => {
  console.log(err, data);
});

console.log("I m in fs module");

const a = fs.readFileSync("sid.txt");
console.log("a file", a.toString());
