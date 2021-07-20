//Rewrite "if" into "switch"

//Rewrite the code below using a single switch statement:

/*
let a = +prompt('a?', '');
if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}
if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/

const number = prompt ('Введите число между 0 и 3', '');

switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;

  case 1:
    alert('Вы ввели число 0');
    break;

  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}
