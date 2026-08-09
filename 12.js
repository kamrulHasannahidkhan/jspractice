function findLongestWord(str) {
  const words = str.match(/\w+/g) || [];
  return words.reduce((longest, current) => 
    current.length > longest.length ? current : longest, ""
  );
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // "jumps"