const p = new Promise((resolve) => {
  resolve(2);
});

p.then((value) => {
  console.log(value);
  return value * 2;
})
  .then((value) => {
    return value * 3;
  })
  .then((value) => {
    console.log(value);
  });
