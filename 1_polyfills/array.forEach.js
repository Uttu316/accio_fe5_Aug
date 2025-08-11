Array.prototype.forEach = null; // assumption

// Polyfill for ForEach//

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    let array = this;

    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  };
}

let arr = [22, 3, 4, 1, 332, 67, "A"];

arr.forEach((item, index, array) => {
  console.log(item, index);
});
