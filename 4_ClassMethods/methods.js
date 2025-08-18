class A {
  constructor() {
    //instance method
    this.sayHello = function () {
      console.log("Hello");
    };
  }
  //prototype methods
  sayBye() {
    console.log("bye");
  }
  //static methods
  static sayNo() {
    console.log("No");
  }
}
const a = new A();
a.sayHello();
a.sayBye();
// a.sayNo()

const b = new A();
b.sayHello();
b.sayBye();
// b.sayNo()

A.sayNo();

console.log(a.sayHello === b.sayHello);
console.log(a.sayBye === b.sayBye);
