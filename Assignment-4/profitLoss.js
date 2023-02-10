const arr = [7, 1, 3, 4, 5, 2, 4];
function profitLoss(arr, buy, sell) {
  if (arr.length === 7 && buy>=0 && buy<7 && sell>=0 && sell<7) {
    let c = arr[buy] - arr[sell];
    if (c > 0) {
      console.log(`Profit : ${c}`);
    } else {
      console.log(`Loss : ${-c}`);
    }
  } else {
    console.log("Array's length must be seven or buy and sell must be less then seven");
  }
}
profitLoss(arr, 5, 4);
