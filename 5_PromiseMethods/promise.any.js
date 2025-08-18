const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("A");
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("B");
  }, 1500);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("C");
  }, 1000);
});
const p = Promise.any([p1, p2, p3]);
p.then((res) => {
  console.log(res);
}).catch((e) => {
  console.log("Error", e);
});
