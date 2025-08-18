const api = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data");
    }, 3000);
  });
};

console.log("A");

const getData = async () => {
  console.log("B");
  const res = await api();
  console.log(res, "C");
};
console.log("D");

getData();

console.log("E");
