  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 

function hasCycle(head: ListNode | null): boolean {

    if(!head) return false;

    let turtoise:ListNode|null = head;
    let hare:ListNode|null = head;

    while(hare && hare.next){

      turtoise = turtoise!.next;
      hare = hare.next!.next;

      if(turtoise === hare){
        return true
      }

    }

    return false

}

