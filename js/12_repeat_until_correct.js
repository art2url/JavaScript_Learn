//Repeat until the input is correct

//Write a loop which prompts for a number greater than 100. 
//If the visitor enters another number – ask them to input again.

//The loop must ask for a number until either the visitor enters 
//a number greater than 100 or cancels the input/enters an empty line.

//Here we can assume that the visitor only inputs numbers. 
//There’s no need to implement a special handling for a non-numeric input in this task.

let num;
do {
  num = prompt('Enter number more than 100', '');
} while (num <= 100 && num);

//tag:
while (1) {
  let num = prompt("Enter number more than 100", '');
  if (num <= 100) {
    alert("Try again");
    continue tag;
  } else if (num > 100) {
    alert('Good! Your number is ' + num);
    break tag;
  }
}

//3v
let number;
do {
  number = prompt("Введите число больше 100", "");
  if (number > 100 || number == null) break;
} while (number <= 100);

