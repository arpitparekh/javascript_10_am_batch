async function callingApi() {    // returning object od promise

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(12)
    }, 4000);

  })
}

async function CallingDatbase() {
  return new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(13)
      }, 6000);

    })
}

console.log("Start");

data = await callingApi();

console.log(data);

console.log("End");
