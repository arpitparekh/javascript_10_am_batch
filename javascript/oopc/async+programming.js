// async programming
// api calling
// database opertions
// file hanlding

// callback
// promise
// async await

// callback
// getting data from funtion after some time


function data() {
    setTimeout(() => {                     // wait for 2 seconds
        console.log("Hello World");
    }, 2000);
}

data()
console.log("Hello");

function display(xyz) {
    console.log(xyz);
}

function sum(a, b) {
  return a+b
}

display(sum(1,2))   // ? -> display -> sum

result = sum(1, 2)  // -> sum -> display
display(result)

// api list

// promise // Promise class (background process)

p = new Promise(function (resolve, reject) {

  setTimeout(() => {
    resolve(12)
  }, 4000);

})

p.then(function (data) {   // runs after 4 second
  console.log(data);
})


