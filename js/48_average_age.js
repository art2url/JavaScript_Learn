//Get average age

//Write the function getAverageAge(users) that gets 
//an array of objects with property age and returns the average age.

//The formula for the average is (age1 + age2 + ... + ageN) / N.

//For instance:
/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [ john, pete, mary ];
alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr = [vasya, petya, masha];
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.lenght;
}
alert(getAverageAge(arr));