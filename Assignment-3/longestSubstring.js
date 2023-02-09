function longestSubstring(str) {
  let longest = 0;
  let longestStr = "";
  let seen = {};
  let start = 0;
  let next = 0;

  while (next < str.length) {
    // Take current character from string
    let char = str[next];
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
      //this for loop store value of str.charAt in a variable
      for (let i = 0; i < str.length; i++) {
        if (longestStr.charAt(i) !== str.charAt(i)) {
          longestStr += str.charAt(i);
        }
      }
    }
    // Update current characters index
    seen[char] = next + 1;
    // console.log(seen);
    // Move to next character
    next++;
  }

  console.log(longestStr);
}
longestSubstring("geeksforgeeks");
