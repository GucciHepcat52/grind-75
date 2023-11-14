var countPalindromicSubsequence = function (s) {
  let result = 0;
  let uniqueChars = new Set(s);

  for (const char of uniqueChars) {
    let start = s.indexOf(char);
    let end = s.lastIndexOf(char);

    if (start < end) {
      result += new Set(s.slice(start + 1, end)).size;
    }
  }

  return result;
};

countPalindromicSubsequence("bbcbaba");
