class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeNodes(head: ListNode | null): ListNode | null {

  if(!head) return null;

  let current:ListNode|null = head;
  
  let sum =0;

  while(current){

    if(current.next?.val === 0){

      sum =0;
      current.val = sum;

    } else {

      current = current.next?.next

    }

  }

}
