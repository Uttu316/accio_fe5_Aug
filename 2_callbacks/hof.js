function print(operation) {
  const result = operation();
  console.log(result);
}

function add() {
  return 2 + 3;
}

function mul() {
  return 2 * 3;
}

print(add); // add is callback function
print(mul); // print is High order function
