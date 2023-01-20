// typescript datatypes
// 1. strings
let x: string = "Isaac";
x = "loise";
console.log(x);

// 2. Number
let y: number = 10;
y = 10 + 5;
console.log(y);

let z: string = "9";
console.log(typeof (y + z));

//3. Boolean
let person: boolean = true;
console.log(person);

// to let a variable have two or more datatypes
let person2: boolean | string | number = 71;
console.log(person2);

// The "any" datatytpe takes in any datatype but it's not adviceable to do it.
let data: any = 10;

// The null datatype
let nn: null = null;
console.log(nn);

// undefined datatype
let jj: undefined = undefined;
console.log(jj);

// Array datatypes
let names: string[] = ["Jaji", "Finbarr"];

// to make an array take more than one datatypes
let blog: (string | Number)[] = ["Jaji", "Finbarr", 60];
let busy: string | Number | boolean | null | undefined | Object = [
  "Jaji",
  "Finbarr",
  60,
  null,
  undefined,
  true,
];

console.log(busy, blog, names);

let arr1: (number | string | boolean | null | undefined)[] = [
  3,
  6,
  9,
  12,
  "one",
  true,
  null,
];

blog[1] = "Favour";
console.log(blog);
arr[6] = undefined;
console.log(arr);

// TUPLES. It has to be in a sequential order and it must be fixed.
let arry: [string, number] = ["Jaji", 90];
console.log(arry);

//  Object

let jute: {
  name1: string;
  age: number;
  height: number;
  color: string;
  sex: string;
  score: number[];
} = {
  name1: "john",
  age: 234,
  height: 23,
  color: "dark",
  sex: "male",
  score: [34],
};
console.log(jute);

// Type
type Person = {
  name: string;
  age: number;
  short: boolean;
  color?: string | number;
};
type Person2 = {
  headsize: number;
};

let student: Person | Person2 = {
  name: "Finbarr",
  age: 24,
  short: false,
  color: "green",
  headsize: 22,
};

let student2: Person | Person2 = {
  name: "Emma",
  age: 24,
  short: false,
  color: 23,
  headsize: 23,
};

console.log(student);
console.log(student2);

// interface
interface Mydata {
  name: string;
  age: number;
  color: string;
}

interface Mydata {
  height: number;
  short: boolean;
}

let profile: Mydata = {
  name: "Favour",
  age: 23,
  height: 139,
  color: "black",
  short: true,
};
console.log(profile);

// interface newstudent extends student{}
99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
