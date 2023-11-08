/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let result = [];
  var des = score.slice().sort((a, b) => b - a);

  for (let i = 0; i < des.length; i++) {
    if (score[i] === des[0]) {
      result.push("Gold Medal");
    } else if (score[i] === des[1]) {
      result.push("Silver Medal");
    } else if (score[i] === des[2]) {
      result.push("Bronze Medal");
    } else {
      result.push(`${des.indexOf(score[i]) + 1}`);
    }
  }
  return result;
};
