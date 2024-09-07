function doSomeThing() {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('done')
    }, 2000);
  })
}

function doSomeThing2() {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('done')
    }, 3000);
  })
}

async function MainApp() {
  console.log("Start");

console.log(await doSomeThing());
console.log(await doSomeThing2());

console.log("End");
}

MainApp()




