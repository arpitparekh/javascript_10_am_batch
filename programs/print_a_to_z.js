let char = 'a';

// 97..122
// 65..90

// casting in javascript

// let ascii = char;
let ascii = char.charCodeAt(0); // 97

while(ascii <= 122){
    console.log(ascii+ " => " +String.fromCharCode(ascii));
    ascii++;
}

// let data = "Bascom"
// console.log(data.length);
// console.log(data.charAt(2));
// console.log(data.charCodeAt(2));