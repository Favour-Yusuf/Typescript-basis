class AllStudent {
  private name: string;
  age: number;
  score: number;

  constructor(name: string, age: number, score: number) {
    this.name = name;
    this.age = age;
    this.score = score;
  }
  intro(): void {
    console.log(
      `my name is ${this.name}, I am ${this.age} old years and I scored ${this.score}`
    );
  }
  login(): void {
    console.log(`Welcome back ${this.name}, your score is ${this.score}`);
  }
}

let student1 = new AllStudent("Edwin", 67, 875);
console.log(student1);
student1.intro();
student1.login();

let student3 = new AllStudent("Favour", 34, 675);
console.log(student3);

class Taylor {
  name: String;
  age: number;
  stack: string;

  constructor(name: string, age: number, stack: string) {
    this.name = name;
    this.age = age;
    this.stack = stack;
  }

  met(): void {
    console.log(
      `My name is ${this.name}, I am ${this.age} and I am a ${this.stack} stack software developer`
    );
  }

  sum(): number {
    return this.age;
  }
}

let swift = new Taylor("Lover", 22, "MERN");
console.log(swift);
swift.met();

let swift1 = new Taylor("New", 32, "FULL STACK");
console.log(swift1);
swift1.met();

let swift2 = new Taylor("Enchanted", 42, "Front End");
console.log(swift2);
swift2.met();

console.log(swift.sum() + swift1.sum() + swift2.sum());

// INHERITANCE

class tokenkey extends Taylor {
  tokenData: number;
  // tokenData2

  constructor(tokenData: number, name: string, age: number, stack: string) {
    super(name, age, stack);
    this.tokenData = tokenData;
    // this.tokenData2 = token
  }
  verify(b: number) {
    if (b === this.tokenData) {
      console.log(`Dear ${this.name}, your tokenkey is correct`);
    } else {
      console.log(`Dear ${this.name},your token key is wrong`);
    }
  }
}

let tokenUser = new tokenkey(465, "Judith", 39, "PHP Developer");
console.log(tokenUser);
tokenUser.verify(465);

interface motortype {
  name: string;
  model: number;
  color: string;
}

// class allcart implements motortype{
