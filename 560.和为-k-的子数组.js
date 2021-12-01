/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  //  第一种解法，超时
  // let res = 0;
  // let preNum = new Array((nums || []).length + 1).fill(0)
  // for (let i = 1; i <= nums.length; i++) {
  //   preNum[i] = preNum[i - 1] + nums[i - 1]
  // }
  // for (let i = 1; i < preNum.length; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (preNum[i] - preNum[j] === k) {
  //       res++
  //     }
  //   }
  // }
  // return res

  // 第二种解法
  let res = 0
  let preSumMap = new Map()
  preSumMap.set(0, 1)

  let preSum = 0, targetPre = 0
  for(let i = 0; i < nums.length; i++) {

    preSum += nums[i]

    targetPre = preSum - k

    if(preSumMap.has(targetPre)) {
      res += preSumMap.get(targetPre)
    }

    preSumMap.set(preSum, (preSumMap.get(preSum) || 0 ) + 1)
  }

  return res
};
// @lc code=end

