// prime numbers
// only divide by itself and divide by 1
// 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97

let num = 47  // 2..42

let flag = true

for(let i = 2;i<num;i++){ // 7
    if(num%i==0){
       flag = false
       break
    }
}

if(flag){
    console.log("Prime number")
}else{
    console.log("Not a prime number")
}


