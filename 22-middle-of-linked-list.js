function middleNode(head) {
  if (head === null) {
    return 0;
  }

  let length = getLengthOfList(head);
  let middle = 0;

  if (length % 2 === 0) {
    middle = length / 2 + 1;
  } else {
    middle = Math.floor(length / 2 + 1);
  }

  let middleValue = getMiddleOfList(head, middle);
  return middleValue;
}

function getLengthOfList(head) {
  let current = head;
  let length = 0;

  while (current !== null) {
    length++;
    current = current.next;
  }

  return length;
}

function getMiddleOfList(head, middle) {
  let current = head;
  let counter = 0;
  while (current !== null) {
    counter++;
    if (counter === middle) {
      return current;
    }
    current = current.next;
  }
}

/* ---------- OTHER SOLUTION ---------- */

// function middleNode(head) {
//   let once = head;
//   let twice = head;

//   while (twice && twice.next) {
//     twice = twice.next.next;
//     once = once.next;
//   }

//   return once;
// }

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(1);
const second = new ListNode(2);
const third = new ListNode(3);
const fourth = new ListNode(4);
const fifth = new ListNode(5);
const sixth = new ListNode(6);
const seventh = new ListNode(7);
const eighth = new ListNode(8);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = sixth;
sixth.next = seventh;
seventh.next = eighth;

middleNode(head);
