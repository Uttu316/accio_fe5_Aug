const api = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data");
    }, 3000);
  });
};

async function isEven() {
  console.log("A");

  const res = await api();

  console.log("C");

  return res;
}

isEven(3)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log("Error", err);
  });

console.log("D");
