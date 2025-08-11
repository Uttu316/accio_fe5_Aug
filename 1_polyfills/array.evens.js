Array.prototype.evens = function () {
  let array = this;

  let result = [];
  for (let i = 0; i < array.length; i++) {
    let curr = array[i];

    if (curr % 2 == 0) {
      result.push(curr);
    }
  }
  return result;
};

let arr = [2, 3, 4, 54, 32, 33, 6453];

let evens = arr.evens();
console.log(evens);
