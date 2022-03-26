function countTinyPairs(arr1, arr2, k) {
  let count = 0;

  let i = 0;
  for (let j = arr2.length - 1; j >= 0; j--) {
    let value = "" + arr1[i] + arr2[j];
    if (value < k) {
      count++;
    }
    i++;
  }

  return count;
}

console.log(countTinyPairs([1, 2, 3], [1, 2, 3], 31));
