let num = 234561;
let temp ;

while(num>0){
 temp = num % 10;
num = num-temp
num = num / 10;
console.log(temp);
}
