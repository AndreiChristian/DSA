class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function listToNumber(l: ListNode | null): number {
  if (l === null) {
    return -1;
  }

  let number = 0;
  let current: ListNode | null = l;

  while (current) {
    number = number * 10 + current.val;
    current = current.next;
  }

  return number;
}

function numberToList(n: number): ListNode | null {
  if (n === 0) {
    return new ListNode(0);
  }
  let copy = n;

  const head = new ListNode(copy % 10);
  copy = Math.floor(copy / 10);

  let current = head;

  while (copy > 0) {
    const newNode = new ListNode(copy % 10);
    copy = Math.floor(copy / 10);
    current.next = newNode;
    current = current.next;
  }
  return head;
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const number1 = listToNumber(l1);
  const number2 = listToNumber(l2);

  return numberToList(number1 + number2);
}
