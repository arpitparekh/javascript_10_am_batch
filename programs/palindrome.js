// 121
// 12321
// 14541

// find reverse first

let num = 1234321
let duplicate = num

// %

// 1234  // 4
// 123   // 3
// 12    // 2
// 1     // 1
// 0     // 0

let rev = 0

while(num!=0){  // 1234

    let last_digit = num%10  // 4  // 3 // 2  // 1

    rev = rev*10 + last_digit // 4  // 43 // 432 // 4321

    num = ~~(num / 10) // 123 // 12  // 1 // 0
    
}

if(rev==duplicate){
    console.log("palindrome")
}else{
    console.log("not a palindrome")
}