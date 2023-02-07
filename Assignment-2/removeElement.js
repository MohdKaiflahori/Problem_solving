let array1 = [10, 20, 50, 40, 60];
let number = 50;
//This function is return the array after removing nth Element
function removeElement(array1) {
  array1.sort((a, b) => a - b);
  let len = array1.length;
  //number must be positive
  if (len > 0) {
    if (number > 0) {
      let index = -1;
      for (let i = 0; i < len; i++) {
        //if number equal to array elements
        if (array1[i] === number) {
          index = i;
        }
      }
      //if number is not found in an array
      if (index === -1) {
        return array1;
      }
      //for removing an element
      for (let i = index; i < len - 1; i++) {
        array1[i] = array1[i + 1];
      }
      array1.length -= 1;

      console.log(array1);
    }
  } else {
    console.log("arrays element must be greater then Zero ");
  }
}
removeElement(array1);
