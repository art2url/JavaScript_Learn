// In this kata, your job is to return the two 
// distinct highest values in a list. If there're less 
// than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

function twoHighest(arr) {
    let highest = 0;
    let secondHighest = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
    }

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > secondHighest && arr[i] < highest) {
            secondHighest = arr[i];
        } else {
            return null
        }
    }

    return [highest, secondHighest];
}
twoHighest([15, 20, 20, 17])