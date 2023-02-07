// This function all the zero in right side of an array
function zeroShift(arr) {
  //sort the array
  arr.sort((a, b) => a - b);
  let length = arr.length;
  //declare a variable to add non zero number in the left side
  let counter = 0;
  if (length > 0) {
    //first loop settle all element of array in left side
    for (let i = 0; i < length; i++) {
      if (arr[i] !== 0) {
        arr[counter++] = arr[i];
      }
    }
    console.log(counter);
    //this loop set 0 in right side
    for (let i = counter; i < length; i++) {
      arr[counter++] = 0;
    }
    console.log(arr);
  } else {
    console.log("arrays element must be greater then Zero ");
  }
}

const arr = [0, 3, 0, 1, 5];
zeroShift(arr);
