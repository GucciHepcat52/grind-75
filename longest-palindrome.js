function longestPalindrome(s) {
  let answer = 0;
  let hashTable = {};

  for (let char of s) {
    hashTable[char] = (hashTable[char] || 0) + 1;
    if (hashTable[char] % 2 === 0) {
      answer += 2;
    }
  }

  return s.length > answer ? answer + 1 : answer;
}
longestPalindrome("asdf");
