/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let result = s.replace(/[^A-Za-z0-9]/g, "");

  let start = 0;
  let end = result.length;
  while (start != end) {
    if (result.charAt(start) != result.charAt(end)) return false;
    start++;
    end--;
  }

  return true;
};
