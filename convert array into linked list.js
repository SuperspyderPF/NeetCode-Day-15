function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
  
  let input = [1, 2, 3];
  
  
  let head = input.reverse().reduce((acc, curr) => {
    if (acc == null) {
      acc = new ListNode(curr);
  
    } else {
      acc = new ListNode(curr, acc);
    }
    return acc;
  }, null);
  
  console.log(head);