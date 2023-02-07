//this function shows an element of an array frequency
function uniqueValue(arr) {
    arr.sort((a, b) => a - b);
    let len = arr.length;
    // initializing the variable for initialize the value of array's first element
    let first = arr[0]
    let count = 0;
    //declare a varible to store the frequency
    let obj = {}
    if(len>0){
    for (let i = 0; i < len; i++) {
        if (arr[i] === first) {
            count++;
            obj[arr[i]] = count;
        }
        else {
            count = 1
            first = arr[i];
            obj[arr[i]] = count;
        }
    }
    console.log(obj);
}
else {
   console.log("arrays element must be greater then Zero");
}
}
const arr = [1,2,3,4]
uniqueValue(arr); 