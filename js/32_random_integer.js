//A random integer from min to max

//Create a function randomInteger(min, max) that generates 
//a random integer number from min to max including both min and max as possible values.

//Any number from the interval min..max must appear with the same probability.

//Examples of its work:

//alert( randomInteger(1, 5) ); // 1
//alert( randomInteger(1, 5) ); // 3
//alert( randomInteger(1, 5) ); // 5

//You can use the solution of the previous task as the base.


function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
alert(randomInteger(1, 3));