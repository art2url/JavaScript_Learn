// A maximal subarray !!!Not solved!!!

//The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

//The task is: find the contiguous subarray of arr with the maximal sum of items.

//Write the function getMaxSubSum(arr) that will return that sum.

//For instance:

//getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
//getMaxSubSum([2, -1, 2, 3, -9]) == 6
//getMaxSubSum([-1, 2, 3, -9, 11]) == 11
//getMaxSubSum([-2, -1, 1, 2]) == 3
//getMaxSubSum([100, -9, 2, -3, 5]) == 100
//getMaxSubSum([1, 2, 3]) == 6 (take all)

//If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:
//getMaxSubSum([-1, -2, -3]) = 0

//Please try to think of a fast solution: O(n2) or even O(n) if you can.

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;
}
alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100
alert(getMaxSubSum([1, 2, 3])); // 6
alert(getMaxSubSum([-1, -2, -3])); // 0