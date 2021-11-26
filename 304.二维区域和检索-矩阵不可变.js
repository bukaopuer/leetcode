/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  let row = matrix.length, col = matrix[0].length

  if (row == 0 || col == 0) return;

  // 初始化
  this.preMatrixSum = new Array(row + 1).fill(0)
  for (let i = 0; i <= row; i++) {
    this.preMatrixSum[i] = new Array(col + 1).fill(0)
  }
  // 维护前缀数组
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      this.preMatrixSum[i][j] = 
        this.preMatrixSum[i - 1][j]
        + this.preMatrixSum[i][j - 1]
        + matrix[i - 1][j - 1]
        - this.preMatrixSum[i - 1][j - 1]
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return this.preMatrixSum[row2 + 1][col2 + 1]
    + this.preMatrixSum[row1][col1]
    - this.preMatrixSum[row1][col2 + 1]
    - this.preMatrixSum[row2 + 1][col1]
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

