// functions
// function is a block of code that performs some task
// function is a reusable block of code
// function is a block of code that can be called many times

// syntax
// function name
// function parameter
// function return type
// function body

// () // function parameter or arguments

function maru_function() {
  // function defination
  console.log('This is Function');
}

maru_function(); // function calling
maru_function(); // function calling
maru_function(); // function calling
maru_function(); // function calling
maru_function(); // function calling
maru_function(); // function calling

function anotherFunction(a, b) {
  console.log(a + b);
}

anotherFunction(12, 13); // function calling
anotherFunction(10, 20); // function calling
anotherFunction(30, 40); // function calling
anotherFunction(50, 1); // function calling
anotherFunction(2, 1); // function calling

// 1..n odd sum

function oddSum(n) {
  //function with parameter

  odd = 0;
  even = 0;

  for (let i = 1; i <= n; i++) {
    // 1 2 3 4 5 6 7 8 9 10

    if (i % 2 != 0) {
      odd = odd + i;
    } else {
      even = even + i;
    }
  }

  console.log(`odd sum is ${odd}`);
  console.log(`even sum is ${even}`);
}

oddSum(10);
oddSum(100);
oddSum(50);
oddSum(30);

function demo() {
  return 12;
}

console.log(demo());

// when function return some value the whole function is act as value
// demo() is become 12

function mySum(a, b) {
  return a + b;
}

function mySub(a, b) {
  return a - b;
}

function myMul(a, b) {
  return a * b;
}

console.log(mySum(12, 13));
console.log(mySub(12, 13));

let result = 10 + mySum(10, 20) + mySub(10, 20);

console.log(result);

console.log(myMul(mySum(1, 2), mySub(5, 2)));
