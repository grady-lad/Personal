function sum(list) {
  if (list.length === 0) {
    return 0;
  }

  const [first, ...rest] = list;

  return first + sum(rest);
}

console.log("sum is", sum([1, 2, 3, 4]));

function count(arr) {
  return arr[0] == undefined ? 0 : 1 + count(arr.slice(1));
}

console.log("count is", count([1, 2, 3, 4]));

function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }
  }

  return max;
}

console.log("max is", findMax([1, 2, 3, 4, 6, 2, 7, 9, 11, 2]));
