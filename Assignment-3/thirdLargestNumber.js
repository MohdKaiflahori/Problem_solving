function thirdLargest(arr) {
  arr.sort((a, b) => b-a);
  const len = arr.length;
  const newArr = [];
  let index = 0;
  for (let i = 0; i < len; i++) {
    if (arr[i] !== arr[i-1]) {
      newArr[index] = arr[i];
      index++;
    }
  }
  const thirdMax = newArr[2];
  console.log(newArr);
  return thirdMax;
}
const arr = [1,2,2,2,3,3,3,4];
console.log(thirdLargest(arr));
