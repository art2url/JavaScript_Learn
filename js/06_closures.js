// function sayHelloTo(name) {
//     const message = 'Hello ' + name
//     return function () {
//         console.log(message)
//     }
// }
// const helloToBob = sayHelloTo('Bob');
// console.log(helloToBob);
// helloToBob();

function createFrameworkManager(){
    const fw = ['Angular','React']
    return {
        print: function(){
            console.log(fw)
        },
        add: function(framework){
            fw.push(framework)
        }
    }
}

const manager = createFrameworkManager();
manager.print();
manager.add('VueJs');
manager.print;