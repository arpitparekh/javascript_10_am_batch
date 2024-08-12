// datatypes
// type of data on which i want to perform some action

// 1 number
// 2 string
// 3 boolean
// 4 undefined
// 5 null
// 6 object
// 7 symbol
// 8 bigint
// Array

let a = 12;
console.log(typeof a);

let b = 12.34;
console.log(typeof b);

// string // is a collection of character
let s_name = "Bascom Bridge $%@!*&*()";
console.log(typeof s_name);

let a1 = 123; // number
let a2 = "123"; // string
console.log(a1);
console.log(a2);
console.log(typeof a1);
console.log(typeof a2);

// string concatination

let data = "Hello";
let n1 = 234;
let n2 = 123;

let result = data + n1;
console.log(result + " this is bascom " + n1 + " hi"); // string concatination
console.log(typeof result);

// boolean  // to store true and false

let isLogin = true;
let isNetAvailable = false;

console.log(typeof isLogin);

// undefined

let data1; // declare
console.log(typeof data1);

// null

let data2 = null; // allocation of memory with no value  // null object
let data3; // no memory allocation with value

console.log(typeof data2);

// object datatype
// key value pair
// oopc  // object oriented programming concepts

let user = {
  name: "maulik",
  address: "vastrapur",
  age: 23,
  isLogin: true,
};

console.log(typeof user);
console.log(user);
console.log(user.address); // get single value from object
console.log(user.age);

// BigInt

let num = 123456789012345678901234567890n;
console.log(typeof num);
console.log(num);

// Array  // compile time  // runtime

// console.log(abc)

// array is a group of values  // indexs
// you can access the value of array using index

let arr = [
  1,
  2.45,
  "Bascom",
  true,
  { name: "Hello" },
  7,
  [1, 2, 4],
  123n,
  false,
];
// 0  1      2        3 ....                                     ...8
console.log(arr);
console.log(arr[2]);
