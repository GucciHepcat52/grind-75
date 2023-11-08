/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.

 1 2 <- 2 3 5 6
 */
var merge = function (nums1, m, nums2, n) {
  let pointerOne = m - 1;
  let pointerTwo = nums2.length - 1;
  let indexToInsertAt = nums1.length - 1;

  while (pointerTwo >= 0) {
    if (pointerOne >= 0) {
      if (nums2[pointerTwo] > nums1[pointerOne]) {
        nums1[indexToInsertAt] = nums2[pointerTwo];
        indexToInsertAt--;
        pointerTwo--;
      } else {
        nums1[indexToInsertAt] = nums1[pointerOne];
        indexToInsertAt--;
        pointerOne--;
      }
    } else {
      nums1[indexToInsertAt] = nums2[pointerTwo];
      indexToInsertAt--;
      pointerTwo--;
    }
  }

  return nums1;
};
