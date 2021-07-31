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