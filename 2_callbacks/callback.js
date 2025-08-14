var x = 2;
function abc(fn1, fn2) {
  var p = 3;

  let r = fn1(p) + fn2(x);

  return r;
}

function sq(x) {
  return x * x;
}
function qb(p) {
  return p * p * p;
}

let a = abc(sq, qb);
console.log(a);
