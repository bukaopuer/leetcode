/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  var diffObj = new DiffNum(n)
  for (let i = 0; i < bookings.length; i++) {
    diffObj.add(bookings[i][0] - 1, bookings[i][1] - 1, bookings[i][2])
  }
  return diffObj.result()
};

function DiffNum(n) {
  this.diffNum = new Array(n).fill(0)
  this.add = function (i, j, seat) {
    this.diffNum[i] += seat
    if (j + 1 < this.diffNum.length) {
      this.diffNum[j + 1] -= seat
    }
  }
  this.result = function () {
    let resResult = new Array(this.diffNum.length).fill(0)
    resResult[0] = this.diffNum[0]
    for (let i = 1; i < this.diffNum.length; i++) {
      resResult[i] = resResult[i - 1] + this.diffNum[i]
    }

    return resResult
  }
}
// @lc code=end

