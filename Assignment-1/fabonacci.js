let number1 = 10
function fabonacci() {
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  for (let i = 0; i < number1; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}
fabonacci();