const api = (input) => {
  return new Promise((resolve, reject) => {
    console.log("processing", input);
    setTimeout(() => {
      resolve("Data");
    }, 3000);
  });
};

console.log("A");

const getData = async () => {
  try {
    console.log("B");
    const res = await api("first");
    const res2 = await api(res + "second");
    const res3 = await api(res2 + "third");
    console.log(res3, "C");
  } catch (e) {
    console.log(e);
  }
  return -1;
};
console.log("D");

getData().then((value) => {
  console.log(value);
});

console.log("E");
