function findMax(arr) {
  if (arr.length === 0) return null;
  return Math.max(...arr);
}

console.log(findMax([3, 7, 2, 9, 5])); // আউটপুট: 9