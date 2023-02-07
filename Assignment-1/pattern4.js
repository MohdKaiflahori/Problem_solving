let n = 5;
let string = "";
for (let i = n; i >0; i--) {
  for (let j = 1; j <=i; j++) {
    string += j;
  }
  if(i>1){
    string+="\n";
  }
}
console.log(string);
