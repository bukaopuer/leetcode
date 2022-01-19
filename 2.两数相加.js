/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let temp = 0
  let list = new ListNode()
  let t3 = list
  let t1 = l1, t2 = l2
  let result = ''
  while (t1 != null && t2 != null) {
    result = t1.val + t2.val + temp
    t3.next =  new ListNode(result % 10, null)
    t3 = t3.next
    t1 = t1.next
    t2 = t2.next
    result > 9 ? temp = 1 : temp = 0
  }
  while (t1 != null) {
    result = t1.val + temp
    t3.next = new ListNode(result % 10, null)
    t3 = t3.next
    t1 = t1.next
    result > 9 ? temp = 1 : temp = 0
  }
  while (t2 != null) {
    result = t2.val + temp
    t3.next = new ListNode(result % 10, null)
    t3 = t3.next
    t2 = t2.next
    result > 9 ? temp = 1 : temp = 0
  }
  if(temp === 1) {
    t3.next = new ListNode(1)
  }
  
  return list.next
 
};
// @lc code=end

