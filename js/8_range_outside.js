//Check the range outside

//Write an if condition to check that 
//age is NOT between 14 and 90 inclusively.

//Create two variants: the first one using NOT !, 
//the second one – without it.

let age;
age = prompt('Input number', '');
if (age <= 90 && age >= 14) {
  alert("You're in bad diapason 14-90");
} else {
  alert(age);
}

//2v
let age;
age = prompt('Input number', '');
if (!(age >= 14 && age <= 90)) {
  alert(age);
} else {
  alert("You're in bad diapason 14-90");
}