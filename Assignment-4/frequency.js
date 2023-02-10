const frequencyOfElementsInArray = (arr) => {
  if (typeof arr == "string") {
    arr = [...arr];
    arr.sort();
  }
  arr.sort((a, b) => a - b);
  const length = arr.length;
  let i = arr[0];
  const obj = {};
  counter = 0;

  for (let j = 0; j < length; j++) {
    if (arr[j] == i) {
      counter++;
      obj[arr[j]] = counter;
    } else {
      counter = 1;
      obj[arr[j]] = counter;
      i = arr[j];
    }
  }
  return obj;
};
const arr = frequencyOfElementsInArray("Hexagonal");
console.log(arr);
