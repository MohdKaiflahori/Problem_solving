const arr = [1, 2, 3, 3, 4, 5, 2, 6, 3, 6, 1];
function removeDuplicate(arr) {
  let index = 0;
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      arr[i] = arr[i];
      index++;
    }
  }
  console.log(arr.length);
  console.log(index);
  arr.length = arr.length - index + 1;
  return arr;
}
console.log(removeDuplicate(arr));
