const arr = [1, 1, 1, 2, 5, 1];
const len = arr.length;
const k = 3;
let maxSum = 0;
let subSum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < k + i; j++) {
    subSum += arr[j];
  }
  //if subsum greater then maxsum then maxsum = subsum
  if (subSum > maxSum) {
    maxSum = subSum;
  }
  //after every iteration of loop the value of subSum is 0
  subSum = 0
}
console.log(maxSum);