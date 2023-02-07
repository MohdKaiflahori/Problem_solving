let count = 0;
let input1 = 50;
let input2 = 100
let i, j;
for (i = input1; i <= input2; i++) {
  for (j = 1; j <= i; j++) {
    if (i % j == 0) {
      count++;
    }
  }
  if (count == 2) console.log("This is a prime number : " + i);
  count = 0;
}
