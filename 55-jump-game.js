/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let lastPosition = nums.length - 1;

  for (let i = lastPosition; i >= 0; i--) {
    // 5 0 0 0 2 2   lsp = 4, does i + nums[i] >= lsp
    let successfulJump = i + nums[i] >= lastPosition;
    if (successfulJump) {
      lastPosition = i;
    }
  }

  return lastPosition == 0;
};

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canJump = function (nums) {
//   let idx = 0;
//   let max = 0;
//   let target = nums.length - 1;

//   while (idx < nums.length) {
//     max = Math.max(max, idx + nums[idx]); // greedy

//     if (max >= target) {
//       return true;
//     }

//     if (max <= idx && nums[idx] === 0) {
//       return false;
//     }

//     idx++;
//   }

//   return false;
// };
