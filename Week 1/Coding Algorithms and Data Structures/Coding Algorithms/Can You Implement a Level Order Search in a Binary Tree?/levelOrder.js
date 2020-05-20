<!DOCTYPE html>
<html>
<body>
<script>
//Create class Node
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

//create class BST
class BST {
  constructor() {     //constructor creates the root node as null
    this.root = null;
  }
  add(data) {               //add function defines how data is added to the root
    const node = this.root;
    if (node === null) {           //if root node is null,
      this.root = new Node(data);  //it will be where new data is added...
      return;
    } else {                                 //...else if node is not null,
      const searchTree = function(node) {    //search using a recursive function
        if (data < node.data) {      //if new data is smaller than node data,
          if (node.left === null) {  //... and if it is null...
            node.left = new Node(data); //...it will be moved to the left...
            return;
          } else if (node.left !== null) {  //...otherwise, search elsewhere
            return searchTree(node.left);  //for a null node to add new data
          }
        } else if (data > node.data) {   //if new data is larger than node data,
          if (node.right === null) {     //... and if it is null...
            node.right = new Node(data);   //...it will be moved to the right...
            return;
          } else if (node.right !== null) {   //...otherwise, search elsewhere
            return searchTree(node.right);    //for a null node to add new data
          }
        } else {        //else, if data is not less than or greater than null,
          return null;  //...then it must be equal to null...
        }               //...which means we don't add new data to the tree.
      };
      return searchTree(node);
    }
  }

  remove(data) {
   const removeNode = function(node, data) {
     if (node == null) {   //node == null means we check to see if tree is empty
       return null;
     }
     if (data == node.data) {  //we check if new data is in the tree...
                              // ... if so, there are 4 options:
       //(1)node has no children
       if (node.left == null && node.right == null) {
         return null;
       }
       //(2)node has no left child
       if (node.left == null) {
         return node.right;
       }
       //(3)node has no right child
       if (node.right == null) {
         return node.left;
       }
       //(4)node has two children
       var tempNode = node.right;
       while (tempNode.left !== null) {
         tempNode = tempNode.left;
       }
       node.data = tempNode.data;
       node.right = removeNode(node.right, tempNode.data);
       return node;
     } else if (data < node.data) {
       node.left = removeNode(node.left, data);
       return node;
     } else {
       node.right = removeNode(node.right, data);
       return node;
     }
   }
   // this.root will be passed as the value retrieved by the removeNode:
   this.root = removeNode(this.root, data);
 }

  levelOrder() {
      let result = [];
      let Q = [];
      if (this.root != null) {
          Q.push(this.root);
          while(Q.length > 0) {
              let node = Q.shift();
              result.push(node.data);
              if (node.left != null) {
                  Q.push(node.left);
              };
              if (node.right != null) {
                  Q.push(node.right);
              };
          };
          return result;
      } else {
          return null;
      };
  };
}



const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);


console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());

console.log('levelOrder: ' + bst.levelOrder());
</script>
</body>
</html>
