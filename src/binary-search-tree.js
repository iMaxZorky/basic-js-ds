const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    return this.node;
  }

  add(data) {
    function addData(node, data) {
      if(!node) {
        return new Node(data)
      }
      if(node.data === data) {
        return node;
      }
      if(data < node.data) {
        node.left = addData(node.left, data)
      } else if(data > node.data) {
        node.right = addData(node.right, data);
      }
      return node;
    }
    this.node = addData(this.node, data);

    
  }

  has(data) {
    function searchData(node, data) {
      if(!node) {
        return false
      }
      if(node.data === data) {
        return true
      }
      return data < node.data ? searchData(node.left, data) : searchData(node.right, data);
    }
    return searchData(this.node, data);

  }

  find(data) {
    function searchNode(node, data) {
      if(!node) {
        return null;
      }
      if(node.data === data) {
        return node;
      }
      return data < node.data ? searchNode(node.left, data) : searchNode(node.right, data);
    }
    return searchNode(this.node, data);

  }

  remove(data) {
    function removeNode(node, data) {
      if(!node) {
        return null
      }
      if(data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else if(data > node.data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if(! node.left && ! node.right) {
          return null
        }
        if(! node.left) {
          node = node.right
          return node;
        }
        if(! node.right) {
          node = node.left;
          return node;
        }
        let minRightData = node.right;
        while(minRightData.left) {
          minRightData = minRightData.left
        }

        node.data = minRightData.data;

        node.right = removeNode(node.right, minRightData.data)

        return node;

      }
    }
    this.node = removeNode(this.node, data);

  }

  min() {
    if(!this.node) {
      return;
    }
    let node = this.node;
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.node) {
      return
    }
    let node = this.node;
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};