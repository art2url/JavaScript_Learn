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
// for..of - перебор массивов, 
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