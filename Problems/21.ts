class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  let current1:ListNode|null = list1;
  let current2:ListNode|null = list2;

  const dummy = new ListNode(0);
  let current3:ListNode|null = dummy;

  while (current1 && current2) {
    if (current1.val <= current2.val) {
      current3.next = current1;
      current1 = current1.next;
    } else {
      current3.next = current2;
      current2 = current2.next;
    }
    current3 = current3.next!;
  }
  
  if (current1) {
    current3.next = current1;
  } 
  if (current2) {
    current3.next = current2;
  }

  return dummy.next;
}

