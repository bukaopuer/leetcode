/*
 * @lc app=leetcode.cn id=1094 lang=javascript
 *
 * [1094] 拼车
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  var diffNumObj = new DiffNum()
  for(let i = 0; i < trips.length; i++) {
    diffNumObj.add(trips[i][1], trips[i][2] -1 , trips[i][0])
  }
  let resArray = diffNumObj.getResult()
  for(let i = 0; i < resArray.length; i++) {
    if(resArray[i] > capacity) {
      return false
    }
  }
  return true
};

function DiffNum() {
  this.diffNum = new Array(1001).fill(0)
  this.add = function (i, j, value) {
    this.diffNum[i] += value
    if (j + 1 < 1001) {
      this.diffNum[j + 1] -= value
    }
  }
  this.getResult = function () {
    let resultArray = new Array(1001).fill(0)
    resultArray[0] = this.diffNum[0]
    for (let i = 1; i < 1001; i++) {
      resultArray[i] = resultArray[i - 1] + this.diffNum[i]
    }

    return resultArray
  }
}
// @lc code=end

