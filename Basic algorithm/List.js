// class Node {
//     constructor(element) {
//         this.element = element
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.size = 0
//         this.head = null
//     }

//     append(element) {
//         let node = new Node(element)
//         if (this.head === null) {
//             this.head = node
//         } else {
//             let current = this.getNode(this.size - 1)
//             current.next = node
//         }
//         this.size++
//     }

//     appendAt(position, element) {
//         if (position < 0 || position > this.size) {
//             return new Error('out of range')
//         }
//         let node = new Node(element)
//         if (position === 0) {
//             node.next = this.head
//             this.head = node;
//         }
//         else {
//             let pre = this.getNode(position - 1)
//             node.next = pre.next
//             pre.next = node
//         }
//         this.size++
//     }

//     remove(position) {
//         if (position < 0 || position >= this.size) {
//             return new Error('out of range')
//         }
//         let current = this.head
//         if (position === 0) {
//             this.head = current.next
//         } else {
//             let pre = this.getNode(position - 1)
//             current = pre.next
//             pre.next = current.next
//         }
//         this.size--
//     }


//     indexOf(element) {
//         let current = this.head
//         for (let i = 0; i < this.size; i++) {
//             if (current.element === element) {
//                 return i
//             }
//             current = current.next
//         }
//         return -1
//     }

//     getNode(index) {
//         if (index < 0 || index >= this.size) {
//             throw new Error('out range')
//         }
//         let current = this.head
//         for (let i = 0; i < index; i++) {
//             current = current.next
//         }
//         return current
//     }
// }

// let l = new LinkedList()
// l.append(1)
// l.append(2)
// l.append(3)
// l.append(4)
// // l.remove(1)
// console.log(l.indexOf(5));
// console.log(l.indexOf(2));
// console.log(l.indexOf(3));
// console.log(l.indexOf(4));
// console.dir(l, {
//     depth: 100
// });

let str = 100
