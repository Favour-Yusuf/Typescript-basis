// type DataType = {
//     SMALL = number;
//     MEDIUM = number;
//     LARGE = number;
// }


// enum myData {
//     SMALL = 200,
//     MEDIUM = 300,
//     LARGE = 400,
// }

// const user1 = myData.SMALL;
// console.log(user1);

// const myData : [number, string] = [1,"2"];

// myData[1] = '8';
// console.log(myData);

const myfunc2 = (x:number, y:number):string => {
    return (x + y).toString()
};

console.log(myfunc2(2,6));

const myfunc3 = (x:number[],y:number[]):number => {
    return x.reduce((a,b) => a+b)
};

console.log(myfunc3([3,5,4,3,],[3,6,5,4]));