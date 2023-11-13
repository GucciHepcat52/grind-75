/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let sortedArray = candidates.sort((a, b) => a - b);
  let result = [];

  function backtrack(start, target, currentCombination) {
    if (target === 0) {
      result.push([...currentCombination]);
      return;
    }

    for (let i = start; i < sortedArray.length; i++) {
      if (sortedArray[i] > target) {
        break;
      }

      currentCombination.push(sortedArray[i]);
      backtrack(i, target - sortedArray[i], currentCombination);
      currentCombination.pop();
    }
  }

  backtrack(0, target, []);

  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
