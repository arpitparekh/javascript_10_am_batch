// conditions
// with the help of condition we decide the flow of program
// if condition
// if else
// if else if
// switch case

// if always takes boolean values // conditional operator // logical operator

let num = 40;

if (num < 30) {
  console.log("number is less then 30");
} else {
  console.log("number is greater then 30");
}

if (num >= 30 && num == 40) {
  console.log("True");
}

if (false) {
  console.log("Hello");
}

let bool = true;

// if (bool) {

// } else {

// }

// if else ladder

let ram = "10GB";

if (ram == "34GB") {
  console.log("RAM is 34GB");
} else if (ram == "12GB") {
  console.log("RAM is 12GB");
} else if (ram == "10GB") {
  console.log("RAM is 10GB");
} else {
  console.log("RAM is not Available");
}

if (typeof ram == "string") {
  // check variable type using condition
  console.log("string che bhai");
} else {
  console.log("not a string");
}

// nested if else

let goa = 41;

if (goa == 42) {
  if (goa < 23) {
    console.log("If ni andar if");
  } else {
    console.log("If ni andar else");
  }
} else {
  if (goa > 23) {
    console.log("Else ni andar if");
  } else {
    console.log("Else ni andar else");
  }
}

let str = "12";
let d = parseInt(str);

console.log(typeof d);
console.log(d);

// switch condition

let a = 55;

switch (a) {
  case 13:
    console.log("value 13 che");
    break;
  case 12:
    console.log("value 12 che");
    break;
  case 55:
    console.log("value 55 che");
    break;
  case 56:
    console.log("value 56 che");
    break;
  default:
    console.log("default che");
}

// if (a == 13) {

// } else if (a == 12) {

// }


// check if number is negetive of positive
// check if number is divisible by 2
// check if year is leap year or not
// check greatest of 2 number  // take 2 numbers and check greatest
