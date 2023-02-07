let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = n-i; j >=0; j--) {
    string += "*";
  }
  if (i!== n) {
    string += "\n";
  }
}
console.log(string);
