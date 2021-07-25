//Uppercase the first character

//Write a function ucFirst(str) that returns the
//string str with the uppercased first character, for instance:

//ucFirst("john") == "John";

//mine shitty solution
function ucFirst() {
  let str = 'John';
  str = 'J' + str[1] + str[2] + str[3];
  return (str);
}
alert(ucFirst());

//correct solution
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}
alert(ucFirst("john")); // John