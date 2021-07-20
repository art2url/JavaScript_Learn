//Название JavaScript

//Используя конструкцию if..else, напишите код, 
//который будет спрашивать: „Какое «официальное» название JavaScript?“

//Если пользователь вводит «ECMAScript», то показать: «Верно!», 
//в противном случае – отобразить: «Не знаете? ECMAScript!»

let ecma = prompt('Какое «официальное» название JavaScript?', '');
if (ecma == 'ECMAScript') {
  alert('Correct!');
} else {
  alert("You don't know? ECMAScript!");
}