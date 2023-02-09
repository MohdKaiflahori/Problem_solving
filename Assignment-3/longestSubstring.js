function userSlice(str ,a , b){
  let longestStr = "";
  for(let i = a ; i<=b ; i++){
    longestStr+=str.charAt(i);
  }
  return longestStr;
}
function longestSubstring(str) {
  let longest = 0;
  let longestStr = "";
  let seen = {};
  let start = 0;
  let next = 0;

  for (let i = 0; i < str.length; i++) {
    // Take current character from string
    let char = str[next];
    // If current character is already present in obj
    if (seen[char]) {
      // Check if start index is less than current character's last index
      if (start < seen[char]) {
        start = seen[char];
      }
    }

    // If new substring is longer than older
    if (longest < next - start + 1) {
      longest = next - start + 1;
      longestStr = userSlice(str,start, next);
    }
    // Update current characters index
    seen[char] = next + 1;
    // Move to next character
    next++;
  }
  console.log(longest, "longest");
  console.log(longestStr);
}
longestSubstring("geeksforgeeks");
