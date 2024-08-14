// operators
// operators are the symbols
// that we use to perform some action

// aruthmetic operators
// + - * /  %(reminder)  **(power)   ~~(integer division)

let a = 12;
let b = 23;

console.log("Sum is : " + (a + b)); // string concatination

console.log(`Sum is ${a + b}`); // string interpolation
console.log(`Substration is ${a - b}`);
console.log(`Multiplication is ${a * b}`);
console.log(`Division is ${a / b}`);

// %  (gives us reminder)

console.log(45 % 6);

// 121212 % 10
console.log(5645 % 10);
console.log(~~(1234 / 10));

console.log(2 ** 3);

// conditional opeators    // boolean
// >  <  >=  <=  == (equality operator) != (not equal to operator)     ===   !==

console.log(12 > 3);

let result = 13 < 3;

console.log(typeof result);
console.log(result);

let n1 = 34;
let n2 = 34;

console.log(n1 != n2);

let str = "34";
console.log(n1 == str);

let b1 = true; // 1  // 0  // representing a boolean value as 0 and 1
let str2 = "1";

console.log("Equality " + (b1 == str2));
// ===  // !==

console.log(b1 === str2); // checks values and datatypes aswell
console.log("Tripple Not " + (b1 !== str2));

// logical operators  // boolean
// &&  // and
// ||  // or
// !   // not

console.log(12 <= 12 && 12 > 3 && 12 < 3);

console.log(12 < 3 || 12 > 3);

console.log(!(12 > 3));

// assignment operators

// =
let t = 12;
let t1 = t;

// += -= *= /= %=  **=

let num = 34;
num = num + 10;
num += 10;
console.log(num); // 44

num %= 2;
console.log(num);

// console.log(12 % 45)

// increment - decrement operators
// ++
// --

let k = 34;
k--;
console.log(k);

let v = 45;
console.log(--v);
console.log(v);

// bit shift operators

let f = 12 << 3
// 12 = 1100000
console.log(f)