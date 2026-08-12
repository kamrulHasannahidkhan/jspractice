function areAnagrams(str1, str2) {
  const format = str => str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').join('');
  return format(str1) === format(str2);
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false