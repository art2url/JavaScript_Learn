//Check for emptiness

//Write the function isEmpty(obj) which returns true 
//if the object has no properties, false otherwise.

//Should work like that:

/*
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
*/

let schedule = {
  isEmpty1: undefined,
  isEmpty2: ["8:30"],
};
for (let key in schedule) {
  alert(schedule[key]);
}

//
function isEmpty(obj) {
  for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false;
  }
  return true;
}