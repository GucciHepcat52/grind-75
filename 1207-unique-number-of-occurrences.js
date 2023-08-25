/**
 * 
       Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
 
        Example 1:
        
        Input: arr = [1,2,2,1,1,3]
        Output: true
        Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
        Example 2:
        
        Input: arr = [1,2]
        Output: false
        Example 3:
        
        Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
        Output: true
         
        
        Constraints:
        
        1 <= arr.length <= 1000
        -1000 <= arr[i] <= 1000
 *
 * @param {number[]} arr
 * @return {boolean}
 */

var uniqueOccurrences = function (arr) {
  let hashmap = new Map();
  let hashset = new Set();

  // this loop saves all number of occurrences of each number in arr into hashmap
  for (let num of arr) {
    if (!hashmap.has(num)) {
      hashmap.set(num, 1);
    } else {
      let count = hashmap.get(num);
      hashmap.set(num, count + 1);
    }
  }

  // this loop goes over all values in the hash ap and makes sure they only occur unique times by using a set, which only allows one instance of each element in the set
  for (let key of hashmap) {
    if (hashset.has(hashmap.get(key))) return false;
    else {
      hashset.add(hashmap.get(key));
    }
  }

  /*
          {
              1: 3,
              2: 2,
              3: 1
          }
  
          data structure called a set
              set only allows a value to occur once
  
          let set = new Set();
          set.add(2) // set: {2}
          set.add(2) // set: {2}
          set.add(3) // set: {2,3}
  
  
          [1,2,2,1,1,3] turn this into a set === [1,2,3]
      */
};
