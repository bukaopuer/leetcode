/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = []
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let arr = null
    if (map.has(nums[i])) {
      arr = map.get(nums[i])
      arr.push(i)
    } else  {
      arr  = [i]
    }
    map.set(nums[i], arr)
  }
  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i]
    if (nums[i] === temp) {
      if (map.has(temp) && map.get(temp).length > 1) {
        return map.get(temp)
      }
    } else {
      if (map.has(temp)) {
        result = [i, map.get(temp)]
      }
    }

  }
  return result
};
// @lc code=end

