// __proto__
// Object.getPrototypeOf() - EcmaScript5 syntax

function Cat(name, color) {
    this.name = name,
        this.color = color
}

Cat.prototype.voice = function () {
    console.log(`Cat ${this.name} says myay`)
}

const cat = new Cat(`Kot`, `white`);

// console.log(Cat.prototype);
// console.log(cat);
// console.log(cat.__proto__ === Cat.prototype);
// console.log(cat.constructor);
// cat.voice();

// --
// Собственные свойства объектов или свойства
// которые доступны в объекте
function Person(){}
Person.prototype.legs = 2;
Person.prototype.skin = 'white';

const person = new Person();
person.name = 'Tema';

// console.log('skin' in person); // проверка св-ва в прототипе
// console.log(person.legs); // 2, св-во доступно в прототипе данного объекта
// console.log(person.name);

// для определения какие свойства в прототипе
// и какие свойства собственные:
// console.log(person.toString);
// console.log(person.hasOwnProperty('name')); // true
// console.log(person.hasOwnProperty('skin')); // false, т.к. skin находится в прототипе


// -- 
// Object.create() - позволяет создавать некоторые объекты
// используя существующий прототип
const proto = { year: 2021 }
const myYear = Object.create(proto);

console.log(myYear.year)

proto.year = 2022;

console.log(myYear.year)

// console.log(myYear.hasOwnProperty('year'));
// console.log(myYear.__proto__ === proto);




