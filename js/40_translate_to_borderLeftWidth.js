//Translate border-left-width to borderLeftWidth

//Write the function camelize(str) that changes 
//dash-separated words like “my-short-string” into camel-cased “myShortString”.

//That is: removes all dashes, each word after dash becomes uppercased.

//Examples:

//camelize("background-color") == 'backgroundColor';
//camelize("list-style-image") == 'listStyleImage';
//camelize("-webkit-transition") == 'WebkitTransition';

//P.S. Hint: use split to split the string into an array, transform it and join back.

function camelize(str) {
  return str
    .split('a') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}
alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));