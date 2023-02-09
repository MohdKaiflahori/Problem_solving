const arr = [1, 2, 15, 4, 5, 6, 3];
const k = 15;
function subSortArray(arr, k) {
  let count = 0;
  let unique = [];
  const len = arr.length;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if(arr[i]<k){
      count++;
      unique.push(arr[i]);
    }
  }
  let temp=1;
  for(let i = 0 ; i<len ; i++){
    if(temp*=arr[i]<k){
      i++;
      count++;
      unique.push(arr[i]*arr[i+1]);
    }
  }
  console.log(unique);
  console.log(count);
}
subSortArray(arr, k);
