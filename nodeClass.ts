// const display = (a: number, b: number) => {
//   return a + b;
// };
// setInterval(() => {
//   console.log(display(5, 6));
// }, 10000);

// console.log("We are ready.....!");
// setInterval((el) => {
//   console.log("Skip this add in 5 seconds");
//   setTimeout(() => {
//     console.log("Press this button to skip.");
//   }, 10000);
// }, 1000);

import os from "os";
// console.log("This is: ", os.version);
// console.log("This is: ", os.homedir);
// console.log("This is: ", os.hostname);
// console.log("This is: ", os.networkInterfaces());
// let file = os.networkInterfaces();

// let x: any[] = [];

// for (let i in file) {
//   x.push(file[i]);
// }

// console.log("This is my Local Address", x[1][1].address);

// let start = os.cpus;
// console.log(start[1].model.split("")[2].split("-")[0].split("")[1]);

import prompt from "prompt-sync";
const pt = prompt("");

while (true) {
  let numb: number = 24;
  for (let i = 0; i <= 3; i++) {
    console.log("");
    let guessnumb: number = parseInt(pt("Guess what's on my mind:"));

    if (numb === guessnumb) {
      console.log("");
      console.log("You read my mind right");
      break;
    } else {
      if (numb < guessnumb) {
      }
      console.log("You are wrong.");
      console.log(`Your number:${guessnumb} is greater than the right number`);
      continue;
    }
  }
  console.log("");
  let entry = pt("press Y to continue or N to Quit:").toUppercase();

  if (entry === "Y") {
    console.log("");
    console.log("Let's do this....!");
    continue;
  } else if (entry) {
    console.log("");
  }
}
