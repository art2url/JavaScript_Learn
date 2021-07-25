function Cat(color, name) {
    this.color = color
    this.name = name
}
// const cat = new Cat('black', 'Mur');
// console.log(cat)

// function myNew(constuctor, ...args){
//     const obj = {}
//     Object.setPrototypeOf(obj, constuctor.prototype)
//     return constuctor.apply(obj,args) || obj
// }
// const cat = myNew(Cat, 'black', 'Mur')
// console.log(cat)

const cat = new Cat();
console.log(cat);

