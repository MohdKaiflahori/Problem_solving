const arr = [1, 1, 2, 2, 3, 4, 4, 5, 4];
arr.sort((a, b) => a - b);
// const newArr = [];
let index = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== arr[i +1]) {
    arr[index] = arr[i];
    index++;
  }
}
arr.length = index;
console.log(arr);

// const {
//   a: {
//     b: [
//       {
//         c: [{ d }],
//       },
//     ],
//   },
// } = {
//   a: {
//     b: [
//       {
//         c: [
//           {
//             d: "hello",
//           },
//         ],
//       },
//     ],
//   },
// };
// console.log(d);
