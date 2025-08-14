console.log("A");

function getdata(x) {
  console.log("B");
  return new Promise((resolve, reject) => {
    console.log("C");
    setTimeout(() => {
      console.log("D");
      if (x > 10) {
        console.log("E");
        resolve({
          title: "Bigger",
          id: "#232",
        });
        console.log("F");
      } else {
        console.log("F");
        reject("Lesser");
      }
    }, 3000);
    console.log("G");
  });
}

console.log("H");

getData(9)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log("Error", err);
  });

console.log("I");
