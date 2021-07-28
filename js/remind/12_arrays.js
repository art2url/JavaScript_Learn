const numbers = [10, 100, 1, 0];

// numbers.forEach((numbers) => {
//     console.log('number', numbers);
// });

// const updatedNumbers = numbers.map((number) => number * 2);
// console.log(updatedNumbers)

const result = numbers.reduce((acc, cur) => {
    return acc + cur;
}, 0)
console.log('result', result);
