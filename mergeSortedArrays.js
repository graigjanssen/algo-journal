/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = (m + n) - 1;

    while (j >= 0) {
      if (i >= 0 && nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        i--;
      } else {
        nums1[k] = nums2[j];
        j--;
      }
      k--;
    }
};

/**
 * Example:
 *   nums1 = [1, 6, 9, 0, 0, 0]
 *   nums2 = [2, 7, 8]
 *   result = [1, 2, 6, 7, 8, 9]
 * 
 * The function initializes three pointers: i, j, and k, pointing at the end of the meaningful part of nums1,
 * the end of nums2, and the end of nums1 respectively. 
 * It then enters a loop that continues until we've placed all elements from nums2.
 * In each iteration of the loop, it compares the current elements of nums1 and nums2,
 * places the larger one at the current position pointed to by k in nums1, and decrements the appropriate pointers.
 */