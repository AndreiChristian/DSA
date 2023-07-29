class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function getLength(head:ListNode|null):number{

  let length = 0;
  while(head){
    head = head.next
    length++
  }

  return length

}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {

  if (!headA || !headB) return null;

  let lenA = getLength(headA)
  let lenB = getLength(headB)

  while(lenA>lenB){
    headA = headA!.next
    lenA --;
  }

  while(lenB>lenA){
    headB = headB!.next
    lenB --;
  }

  while(headA!==headB){
    headA = headA!.next
    headB = headB!.next
  }

  return headA

}
