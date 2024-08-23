for (let x = 1; x <= 5; x++) {
  // x = 1, 2, 3, 4  // x*y  // loop inside loop

  for (let y = 1; y <= 5; y++) {
    process.stdout.write(`${x}${y} `);
  }

  console.log();
}

/*
 *****
 *****
 *****
 *****
 *****
 */

/*

*
**
***
****
*****

*/

console.log();

for (let x = 1; x <= 5; x++) {
  // x = 1,2,3

   // y = x

  for (let y = 1; y <= x; y++) {
    // 1 time // 2 time

    process.stdout.write('*');
  }
  console.log();
}

/*

*****
****
***
**
*

*/

console.log();

for (let x = 1; x <= 5; x++) {

  // x = 1,2,3,4,5
  // y = 5,4,3,2,1

  // x ? y

  // y = 6-x


  for (let y = 1; y <= 6-x; y++) {
    process.stdout.write('*');
  }
  console.log();
}

/*

*
***
*****
*******
*********
x  y
1  1
2  3
3  5
4  7
5  9

y = 2x-1


*/

console.log();


for (let x = 1; x <= 5; x++) {

  for (let y = 1 ; y<= 2*x-1 ;y++){
    process.stdout.write('* ');
  }
  console.log();
}

/*

     *
    **
   ***
  ****
 *****

*/

console.log();

for (let x = 1; x <= 5; x++) { // x = 1,2,3,4,5

  for (let z = 1; z <=5-x; z++){  // space = 4,3,2,1,0
    process.stdout.write(' ');
  }

  for (let y = 1; y <= x; y++) {  // 1,2,3,4,5
    process.stdout.write('* ');
  }
  console.log();
}

/*

*****
 ****
  ***
   **
    *

*/

