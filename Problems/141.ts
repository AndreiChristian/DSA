  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 

function hasCycle(head: ListNode | null): boolean {


    if (head === null || head.next === null){
      return false
    }

    const stack:any[] = [];

    let current : ListNode| null = head;

    while(current !==null){

      if(stack.find(current.val) !== undefined){

        return true

      }

    }

}

