function reversedList(head, prev = null) {
  if (head === null) return prev;

  const next = head.next;
  head.next = prev;
  return reversedList(next, head);
}
