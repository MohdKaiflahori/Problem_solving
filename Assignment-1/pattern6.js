let n = 5;
let String = "";
let min = n*2-1;
for (let i = n; i>=1; i--) {
  for (let j = n - 1; j >=i; j--) {
    String += " ";
  }
  for (let k = 0; k<min; k++) {
    String += "*";
  }
  min -= 2;
  if (i>1) {
    String += "\n";
  }
}
console.log(String);
