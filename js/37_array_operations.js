//Array operations.

//Let’s try 5 array operations.

//Create an array styles with items “Jazz” and “Blues”.
//Append “Rock-n-Roll” to the end.
//Replace the value in the middle by “Classics”.
//Your code for finding the middle value should work for any arrays with odd length.
//Strip off the first value of the array and show it.
//Prepend Rap and Reggae to the array.

//The array in the process:

//Jazz, Blues
//Jazz, Blues, Rock-n-Roll
//Jazz, Classics, Rock-n-Roll
//Classics, Rock-n-Roll
//Rap, Reggae, Classics, Rock-n-Roll

let styles = ["Jazz", "Blues"]; //Создайте массив styles с элементами «Джаз» и «Блюз».
styles.push("Rocknroll"); //Добавьте «Рок-н-ролл» в конец.
styles[Math.floor((styles.length-1)/2)] = 'Classic'; //Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
alert(styles.shift()); //Удалите первый элемент массива и покажите его.
styles.unshift("Rap","Raggie");//Вставьте «Рэп» и «Регги» в начало массива.