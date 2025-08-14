console.log("A");
const p = new Promise((resolve, reject) => {
  console.log("B");
  const username = prompt("Entar Username");
  setTimeout(() => {
    if (username === "ABC") {
      resolve("Done"); // async
    } else {
      reject("No"); // async
    }
  }, 4000);
});

p.then((data) => {
  //async
  consol.log(data);
}).catch((error) => {
  // async
  console.log("Error", error);
});
