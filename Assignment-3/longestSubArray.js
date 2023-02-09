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
    let seen = {};
    let start = 0;
    let next = 0;
  
    for (let i = 0; i < arr.length; i++) {
      // Take current element from array
      let char = arr[next];
      // If current character is already present in map
      if (seen[char]) {
        // Check if start index is greater than current character's last index
        if (start < seen[char]) {
          start = seen[char];
        }
      }
  
      // If new substring is longer than older
      if (longest < next - start + 1) {
        longest = next - start + 1;
        // let index = 0;
        // longestStr = str.slice(start, next + 1);
        longestSubArr = userSlice(arr,start, next);
        //this for loop store value of str.charAt in a variable
        // for (let i = 0; i < longest; i++) {
        //   if (longestStr.charAt(next) !== str.charAt(next)){
        //     longestStr += str.charAt(next);
        //   }
        // }
      }
      // Update current characters index
      seen[char] = next + 1;
      // Move to next character
      next++;
    }
    console.log(longest, "longest");
    console.log(longestSubArr);
  }
  const arr = [5,2,3,5,4,3]
  longestSubArr(arr);
  