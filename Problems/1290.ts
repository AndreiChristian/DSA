  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 

function getDecimalValue(head: ListNode | null): number {

  let number = 0;

  while(head){
      number = number*2 + head.val
      head = head.next
    }

  return number

}
