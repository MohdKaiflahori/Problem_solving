const findSubArray = function (arr, k) {
  arr.sort((a, b) => a - b);

  let count = 0;
  let multiply = 1;

  for (let i = 0, j = 0; j < arr.length; j++) {
    multiply *= arr[j];
    while (multiply >= k) {
      multiply /= arr[i++];
    }
    count += j - i + 1;
  }
  return count;
};
const arr = [1, 2, 3, 4, 5, 6, 15];
const k = 15;
console.log(findSubArray(arr, k));
