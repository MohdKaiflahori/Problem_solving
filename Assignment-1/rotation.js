let num = 12345;
let k = -5;
function numberOfDigit(num) {
  let digit = 0;
  while (num > 0) {
    digit++;
    num = Math.floor(num / 10);
  }
  return digit;
}
function rotation(num) {
  const digit = numberOfDigit(num);
  k=k%digit;
  if(k<0){
    k=k+digit;
  }
  let div = 1;
  let multi = 1;
  for (let i = 1; i <= digit; i++) {
    if (i <= k) {
      div *= 10;
    } else {
      multi *= 10;
    }
  }
  let q = Math.floor(num / div);
  let r = Math.floor(num % div);
  let res;
  res = r * multi + q;
  console.log(res);
}
rotation(num);
