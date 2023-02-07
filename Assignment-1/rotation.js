function numberOfDigit(num) {
  let digit = 0;
  while (num > 0) {
    digit++;
    num = Math.floor(num / 10);
  }
  return digit;
}

function rotateNumberByK(num, k) {
  const digit = numberOfDigit(num);

  k = ((k % digit) + digit) % digit;

  let left_no = Math.floor(num / Math.floor(Math.pow(10, digit - k)));
  console.log(left_no);
  num = num % Math.floor(Math.pow(10, digit - k));
  console.log(num);
  let left_digit = numberOfDigit(left_no);
  console.log(left_digit);
  num = num * Math.floor(Math.pow(10, left_digit)) + left_no;

  console.log(num);
}

const num = 12345;
const k = -3;

rotateNumberByK(num, k);

//remove nth element as given an array?
//count unique values in an array?
//take all the zeros to the right of the array?
//find two numbers pairs that equal to N if this exist return true else false
