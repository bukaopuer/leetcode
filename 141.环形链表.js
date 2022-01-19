/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let slow = head
  let fast = head
  let result = false
  while(fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
    if(slow == fast) {
      result = true
      break
    }
  }

  return result
};
// @lc code=end

