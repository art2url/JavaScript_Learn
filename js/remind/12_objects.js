const user = {
    name: "James",
    age: 35,
    "Bonnier s": true
};
user.name = "Stan";
console.log(user["Bonnier s"]); //true
console.log(user.name); //Stan
console.log(user.age); //35
console.log("map" in user); //false

let admin = {name: "Bob"};
for (let key in user){
    console.log(key); // вывод всех ключей
} 
// for..of - перебор массивов 
// for..in - перебор ключей в объекте

let codes = {
    "49": "Germany",
    "41": "Swiss",
    "44": "England",
    "1": "USA"
};

for (let code in codes){
    console.log(code);
} // 1,41,44,49 целочисленные идут по порядку


// Method
let John = {
    name: 'John',
    sayHi() {
        console.log(this.name + ' say: Hi!');
    }
};
// user1.sayHi = function(){
//     console.log('Hi!');
// }
John.sayHi();


//
console.log( 20e-1['toString'](2) ); // why 10?

//
console.log( "1"[0] )

//
let obj = {'1': 0, 1: 1, 0: 2};
console.log(obj['1']);

//
let arr = [];
arr[1] = 1;
arr[3] = 33;
console.log(arr.length);

//
function MyArray() { }
MyArray.prototype = [];
let arr1 = new MyArray();
arr1.push(1, 2, 3);
console.log(arr1.length);
