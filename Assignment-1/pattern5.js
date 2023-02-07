let n = 5;
let String = "";
let min = 1;
for (let i = 1; i <= n; i++) {
  for (let j = n - 1; j >=i; j--) {
    String += " ";
  }
  for (let k = 0; k < min; k++) {
    String += "*";
  }
  min += 2;
  if (i !== n) {
    String += "\n";
  }
}
console.log(String);
