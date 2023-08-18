const fs = require("fs");

fs.readFile("sid.txt", "utf-8", (err, data) => {
  console.log(err, data);
});

console.log("I m in fs module");
