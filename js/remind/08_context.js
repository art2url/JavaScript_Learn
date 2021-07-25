// const person = {
//     surname: 'Stark',
//     knows: function (what, name) {
//         console.log(`You ${what} nothing, ${name} ${this.surname}`)
//     }
// }

// const John = { surname: 'Snow' };
// person.knows("saw", 'Brahn');
// person.knows.call(John, "know", 'John');
// person.knows.apply(John, ["know", 'John']);
// //spread operator (...)
// person.knows.call(John, ...["know", 'John']);
// //bing returns function
// const bound = person.knows.bind(John, "know", 'John');
// bound();

//----
// function Person(name, age) {
//     this.name = name,
//         this.age = age,

//         console.log(this)
// };

// const elena = new Person('Ann', 20);

// // Binding explicit - "явный байндинг", т.е. 
// // с каким контекстом нужно вызывать ф-ю
// function logThis(){
//     console.log(this)
// }

// const obj = {num:42}
// logThis.apply(obj);
// logThis.call(obj);
// logThis.bind(obj)();

// // Implicit - "неявная" привязка контекста
// const animal = {
//     legs: 4,
//     logThis: function(){
//         console.log(this)
//     }
// }
// animal.logThis();

// Arrows function
function Cat(color) {
    this.color = color
    console.log('This', this)
        ; (() => console.log('Arrow this', this))()
}
new Cat('red')