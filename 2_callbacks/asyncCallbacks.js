console.log("Hello");
setTimeout(() => {
  console.log("Hey");
  clearInterval(intervalId);
}, 3000);
console.log("Bye");

let intervalId = setInterval(() => {
  console.log("A");
}, 1000);
