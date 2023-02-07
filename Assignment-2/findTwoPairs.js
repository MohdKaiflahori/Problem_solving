//this function return true if two pairs equal to sum either false
function twoNumbersSum(arr, sum) {
  const len = arr.length;
  arr = arr.sort((a, b) => a - b);
  //  initializing two varible to set two pointer method in the function
  let i = 0;
  let j = len - 1;
  while (i < j) {
    //if this situation true then it return true
    if (arr[i] + arr[j] === sum) {
      return true;
    }
    //if this situation true then it increment the value of i
    else if (arr[i] + arr[j] < sum) {
      i++;
    }
    //if this situation true then it decrement the value of j
    else if (arr[i] + arr[j] > sum) {
      j--;
    }
  }
  //if the sum is not equal to any pair of array element then it return false
  return false;
}
let arr = [1, -15, 2, 3, 4];
const sum = -14;
console.log(twoNumbersSum(arr, sum));
