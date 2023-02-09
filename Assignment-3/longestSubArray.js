function userSlice(arr ,a , b){
    let longestSubArr = [];
    for(let i = a ; i<=b ; i++){
      longestSubArr+=arr[i];
    }
    return longestSubArr;
  }
  function longestSubArr(arr) {
    let longest = 0;
    let longestSubArr = [];
    let obj = {};
    let start = 0;
    let next = 0;
  
    for (let i = 0; i < arr.length; i++) {
      // Take current element from array
      let element = arr[next];
      // If current element is already present in obj
      if (obj[element]) {
        // Check if start index is less than current elements's last index
        if (start < obj[element]) {
          start = obj[element];
        }
      }
  
      // If new subArray is longer than older
      if (longest < next - start + 1) {
        longest = next - start + 1;
        longestSubArr = userSlice(arr,start, next);
      }
      // Update current element index
      obj[element] = next + 1;
      // Move to next element
      next++;
    }
    console.log(longest, "longest");
    console.log(longestSubArr);
  }
  const arr = [5,2,3,5,4,3]
  longestSubArr(arr);
  