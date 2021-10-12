//1 RETURN MIN VALUE
let min = (a, b) => a < b ? a : b
min(3, 5) // 3

//2 RETURN MIN IN ARRAY
// v1 if 0-9 works
let min = arr => {
    arr.sort();
    return arr[0];
}
min([2, 4, 1, 3, 7]) // 1
    // v2 if 0 +infinity works
let min = arr => {
    arr.sort((a, b) => a - b);
    return arr[0];
}
min([2, 4, 1, 3, 17]) // 1

//3 SUM OF ARRAY
let sum = arr => {
    let sumArr = 0;
    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i]
    }
    return sumArr;
}
sum([2, 4, 1, 3, 7]) // 17

//4 IS EVEN
let isEven = a => a % 2 == 0 ? true : false;
isEven(1) // false

//5 RETURN ONLY EVEN NUMBERS FROM ARRAY
let filterEven = arr => {
    let evenArr = arr.filter(n => n % 2 == 0);
    return evenArr;
}
filterEven([1, 2, 3, 4, 5]) // [2, 4]

//6 IS EVEN NUM EXIST ON ARRAY
let hasEvens = arr => {
    let result = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result = true
        }
    }
    return result;
}
hasEvens([1, 2, 3]) // true

//7 EVERY NUMS ON ARRAY IS EVEN
let allEvens = arr => {
    let isEvenArr = arr.filter(n => n % 2 == 0);
    return isEvenArr.length == arr.length;
}
allEvens([1, 5, 3]) // false

//8 POWER RECURSION
let power = (a, b) => (b == 1) ? a : a * power(a, b - 1)
power(2, 4) // 16

//9 PROPERTY NAME ARRAY
let pluck = (array, property) => {
    let result = array.map(a => a.name);
    return result;
}
pluck([{ name: 'Anna' }, { name: 'Petro' }], 'name') // ['Anna', 'Petro']

//10 FIBONACCI NUM ?? решение хуета
let fibSeq = n => {
    let result = [0, 1];
    for (var i = 2; i < n; i++) {
        result.push(result[i - 2] + result[i - 1]);
    }
    return result[7]
}
fibSeq(8)