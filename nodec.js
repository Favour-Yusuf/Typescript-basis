import { debug } from "console";
import { fstat } from "fs";

console.log(debug);
console.log(console.log);
console.table([1, 7, 4, 5, 6, "first"]);
console.timeEnd("satrt");
console.time("End");

import fs from "fs";
import path from "path";
console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));

console.log(path.join("./text.txt"));
console.log(path.join(__dirname, "text.txt"));
console.log(path.join(__dirname, "Test", "text.txt"));

fs.writeFile(".text.txt", "This is the Best I can do", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

const addUp = (a, b) => {
  return a * b;
};

fs.readFile(path.join(__dirname, "Newresult.txt"));
