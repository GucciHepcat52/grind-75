/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }

 head->1->1->2->3->4->4
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 == null && list2 == null) return null;
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  let head = new ListNode(0);
  let pointer = head;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      pointer.next = list1;
      list1 = list1.next;
    } else {
      pointer.next = list2;
      list2 = list2.next;
    }
    pointer = pointer.next;
  }

  if (list1 == null) {
    pointer.next = list2;
  }

  if (list2 == null) {
    pointer.next = list1;
  }

  return head.next;
};

/* ---- RECURSION SOLUTION ---- */

// function mergeTwoLists(l1, l2) {
//   if (!l1 || !l2) return l1 ? l1 : l2;
//   if (l1.val < l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l1, l2.next);
//     return l2;
//   }
// }

// mergeTwoLists([-1, 2, 4], [1, 3, 4]);
