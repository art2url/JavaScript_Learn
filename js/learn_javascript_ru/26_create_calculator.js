//Create a calculator !!!Fucked my brain!!!

//Create an object calculator with three methods:

//read() prompts for two values and saves them as object properties.
//sum() returns the sum of saved values.
//mul() multiplies saved values and returns the result.

/*
let calculator = {
   ... your code ...
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

//+Create new Calculator

//Create a constructor function Calculator that creates objects with 3 methods:

//read() asks for two values using prompt and remembers them in object properties.
//sum() returns the sum of these properties.
//mul() returns the multiplication product of these properties.


//to index.html
let calculator = {
  read() {
    this.a = +prompt("1st number");
    this.b = +prompt("2nd number");
  },
  sum() {
    return this.a + this.b
  },
  mul() {
    return this.a * this.b
  },
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//to *.js
function Calculator() {
  this.read = function () {
    this.a = +prompt("A?");
    this.b = +prompt("B?");
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());