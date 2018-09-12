/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  const node = this.head;
  const node1 = l1.head;
  const node2 = l2.head;
  
  while (node1.next !== null || node2.next !== null) {
    node.value = node1.value + node2.value
    node = node.next;
    node.value = node1.next.value + node2.next.value
    if (node1.value + node2.value > 9) {
      this.head.value -= 10
      node.value += 1
    } 
    node1 = node1.next;
    node2 = node2.next;
  }
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
