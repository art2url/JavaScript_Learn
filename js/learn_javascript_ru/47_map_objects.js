//Map to objects

//You have an array of user objects, each one has name, surname and id.

//Write the code to create another array from it, of objects 
//with id and fullName, where fullName is generated from name and surname.

//For instance:
/*
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [ john, pete, mary ];
let usersMapped = /* ... your code ... 

usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
*/
//So, actually you need to map one array of objects to another. 
//Try using => here. There’s a small catch.

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };
let users = [vasya, petya, masha];
let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

//usersMapped = [
//  { fullName: "Вася Пупкин", id: 1 },
//  { fullName: "Петя Иванов", id: 2 },
//  { fullName: "Маша Петрова", id: 3 }
//]

alert(usersMapped[0].id)
alert(usersMapped[0].fullName)