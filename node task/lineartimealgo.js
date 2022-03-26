function linearTimeAlgo(arr, sum) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let temp = [];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        temp.push(arr[i]);
        temp.push(arr[j]);
        result.push(temp);
      }
    }
  }

  return result;
}

console.log(linearTimeAlgo([3, 5, 2, -4, 8, 11], 7));
