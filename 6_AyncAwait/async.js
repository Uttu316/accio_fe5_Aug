// function isEven(num){
//     return new Promise((resolve,reject)=>{
//                 resolve("Even")
//     })
// }

// function isEven(num){
//     return Promise.resolve("Even")
// }

async function isEven() {
  // return "Even"
  throw "Odd";
}

isEven(3)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log("Error", err);
  });
