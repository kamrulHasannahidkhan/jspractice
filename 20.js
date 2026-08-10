function charCount(str) {
  const result = {};
  for (let char of str.toLowerCase()) {
    if (/[a-z0-9]/.test(char)) {
      result[char] = (result[char] || 0) + 1;
    }
  }
  return result;
}

console.log(charCount("hello world")); // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }