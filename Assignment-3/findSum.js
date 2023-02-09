const arr = [1,1,18,2,51,1];
const k = 3;
// this function give sum of three consecutive element
function maxSum1(arr, k) {
  const len = arr.length;
    let max = 0;
    let sum = 0;
    // find initial sum of first k elements
    for (let i = 0; i < k; i++) {
       sum += arr[i];
       max = sum;
     }
    // iterate the array once and increment the right edge
     for (let i = k; i < len; i++) {
        sum += arr[i] - arr[i - k];
      // compare if sum is more than max, if yes then replace max with new sum value
      if (sum > max) {
         max = sum;
       }
   }
 return max;
 }
 console.log(maxSum1(arr,k));
