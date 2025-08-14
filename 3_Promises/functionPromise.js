console.log("A");

function getData() {
  console.log("B");
  return new Promise((resolve, reject) => {
    console.log("C");
    setTimeout(() => {
      resolve("Done");
      console.log("E");
    }, 3000);
    console.log("D");
  });
}

console.log("F");

getData()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log("Error", error);
  });
console.log("G");
