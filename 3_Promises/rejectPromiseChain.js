const p = new Promise((resolve) => {
  resolve(2);
});

p.then((value) => {
  console.log(value);
  return value * 2; // resolved promise
})
  .then((value) => {
    throw "OOps"; // reject promise
    // return value*3
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log("Error", err);
  });
