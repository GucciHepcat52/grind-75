function twoSum(nums, target) {
  let solution = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let addedNums = nums[i] + nums[j];
      if (addedNums === target) {
        solution.push([i, j]);
      }
    }
  }
  return solution[0];
}

twoSum([2, 7, 11, 15], 9);
