Array.prototype.includes = null; // assume this for older browser

if (!Array.prototype.includes) {
  Array.prototype.includes = function (input) {
    let array = this; // access the array value

    for (let i = 0; i < array.length; i++) {
      if (array[i] === input) {
        return true;
      }
    }
    return false;
  };
}

let arr = [2, 3, 4, 5, 1];

let isPresent = arr.includes(4);

console.log(isPresent);
