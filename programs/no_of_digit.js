// 6545
// no of digit
// without using function

let num = 453234545

// console.log(num.toString().length)

// % 

// 4532
// 4532 / 10 = 453
// 453  / 10 = 45
// 45   / 10 = 4
// 4    / 10 = 0

let count = 0

while(num!=0){
    num =  ~~(num / 10)
    count++
}

console.log(`no of digit is ${count}`)

