// loops
// repetative task
// sequential task

// while
// do while
// for
// for in
// for of

// while // where range is unknown

let num = 34  // 35  // 36  // 39  // 40

// initial value
// condition
// increment decrement

while(num<40){    // infinite
    console.log(num)  // 34  // 35  // 39
    num++
}

console.log()

let num2 = 40

while(num2>34){

    console.log(num2)
    num2--
}

console.log()

// do..while

let num3 = 40

do{
    console.log(num3)
    num3++  // 41  // 38

}while(num3<=50);

console.log()

// for // range is known

for(let a = 1;a<=10;a++){

    console.log(a)
}

numbers = [12,4,6,54,4,5,67,87,7]  // data strcucture
//         0 ............

// console.log(numbers)

console.log()

for(let i = 0;i<numbers.length;i++){
    console.log(numbers[i])
}


console.log()

let ini = 0

while(ini<numbers.length){

    console.log(numbers[ini]+10)
    ini++
}

console.log()

// sum of all the elements in array

list = [14,3,56,67,2,67,12,55,55]

// +=

let sum = 0  // 12 // 

for(let i = 0;i<list.length;i++){  // 34
    // console.log(list[i])
    sum += list[i] // sum = sum + list[i]
}

console.log(`sum is : ${sum}`)

// find minium from array

let min = list[0]  // 3

for(let i = 0;i<list.length;i++){ 
   
    if(list[i]<min){
        min = list[i]
    }

}

console.log(`minimum from array is ${min}`)


// for in
// for of


// swap the values without using another variable or printing in another
let a = 12  // 25
let b = 13  // 13  // 12

// let c = a
// a = b
// b = c

a = a+b
b = a-b
a = a-b


console.log(`a is ${a}`)
console.log(`b is ${b}`)

console.log()

// for in  // loop inside index
// for of  // loop inside value

data = [12,34,567,54,34,56,8]

for(let f of data){
    console.log(f)
}

console.log()

obj = {                     // of does not work in object
    name:"Bascom",
    no_student:50,
    no_chair : 60
}

for(let i in obj){
    console.log(obj[i])
}


// string is also iterable
let nameData = 'Bascom'

for(let n of nameData){
    console.log(n)
}

// print 1.100 using while dowhile and for
// print same 100.1 using while dowhile and for
// print odd number between 1.100
// print even number between 1.100
// print numbers between 1.100 which are divisible by 5 and 3
// print numbers between 1.100 which are divisible by 5 and 3 and 7

