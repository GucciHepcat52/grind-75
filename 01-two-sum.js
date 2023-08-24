/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = [];
  let hm = new Map();
  // hashmap - lookup table - memoization(remember keydetails)
  /*
      {
          7: 0(i),
          -2:1,
          -4: 2,

      }
  */
  for (let i = 0; i < nums.length; i++) {
    if (hm.has(nums[i])) result.push(i, hm.get(nums[i]));
    hm.set(target - nums[i], i);
  }

  return result;
};

/*

BRUTE FORCE

  let result = [];

  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          let addedNum = nums[i] + nums[j];
          if (addedNum === target) {
              result.push([nums[i], nums[j]])
          }
      }
  }

  console.log(result)
  return result;
  
  */
