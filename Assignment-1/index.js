let str = "name = sameer; city = jaipur;age=21";
let arr = str.split(";");
let obj = {}
for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i].split("=");
    obj[arr[i][0].trim()] = arr[i][1].trim();
}
console.log(str)
console.log(obj);
// const calsub = (x, y) => x - y;
// console.log(calsub(2,1));
// function kaif(a){
//     console.log("kaif");
//     return function(b){
//         console.log("Anas");
//        return a+b;
//     }
// }
// // console.log(kaif(4));
// const data = kaif(4);
// console.log("data" ,data(10));
// (function (date){
//     // console.log("Kaif " + string);
//     console.log(date.toLocaleTimeString());
// })(new Date);