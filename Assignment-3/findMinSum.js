// this function give minSum of three consecutive element
function maxSum1(arr, k) {
  const len = arr.length;
  let minSum = 0;
  let sum = 0;
  // find initial sum of first k elements
  for (let i = 0; i < k; i++) {
    sum += arr[i];
    minSum = sum;
  }
  // iterate the array once and increment the right edge
  for (let i = k; i < len; i++) {
    sum += arr[i] - arr[i - k];
    // compare if sum is less than minSum, if yes then replace minSum with new sum value
    if (sum < minSum) {
      minSum= sum;
    }
  }
  return minSum;
}
const arr = [1, 1, 1, 0, 2, 0];
const k = 2;
console.log(maxSum1(arr, k));
