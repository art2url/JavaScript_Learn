//Truncate the text

//Create a function truncate(str, maxlength) that checks 
//the length of the str and, if it exceeds maxlength – replaces
//the end of str with the ellipsis character "…",
//to make its length equal to maxlength.

//The result of the function should be the truncated (if needed) string.

//For instance:

//truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
//truncate("Hi everyone!", 20) = "Hi everyone!"

//mine solution
function truncate(str, maxlenght) {
  maxlenght = str.slice(0, 21);
  return maxlenght + `${'…'}`;
}
alert(truncate("Вот, что мне хотелось бы сказать на эту тему:"));
alert(truncate("Всем привет!"));

//correct solution
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
alert(truncate("Всем привет!", 20));