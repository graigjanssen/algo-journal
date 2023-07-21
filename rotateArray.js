/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// O(n), needed GPT help to get this. Creates a custom reverse function with start and end params
var rotate = function(nums, k) {
  k = k % nums.length;
  var reverse = function(nums, start, end) {
      while (start < end) {
          let temp = nums[start];
          nums[start] = nums[end];
          nums[end] = temp;
          start++;
          end--;
      }
  };
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

// Ineffecient solution
// Easier to read but unshift is costly, will not scale well for large inputs
var rotate = function(nums, k) {
  while (k > 0) {
    nums.unshift(nums.pop());
    k--;
  }
}