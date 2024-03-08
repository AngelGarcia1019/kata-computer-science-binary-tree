class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root ?? null;
  }

  isEmpty() {
    return this.root === null;
  }

  add(value) {
    if (this.isEmpty()) {
      this.root = new Node(value);
      return;
    }
    let aux = this.root;
    while (aux) {
      if (value < aux.value) {
        if (aux.left) {
          aux = aux.left;
        } else {
          aux.left = new Node(value);
          return;
        }
      } else {
        if (aux.right) {
          aux = aux.right;
        } else {
          aux.right = new Node(value);
          return;
        }
      }
    }
  }

  addRecursive(value, node = this.root) {
    if (!node) {
      this.root = new Node(value);
      return;
    }

    if (value < node.value) {
      if (node.left) {
        return this.addRecursive(value, node.left);
      }
      node.left = new Node(value);
      return;
    } else {
      // vamos hacia la derecha
      if (node.right) {
        return this.addRecursive(value, node.right);
      }
      node.right = new Node(value);
      return;
    }
  }

  findRecursive(value, node = this.root) {
    if (node.value === value) {
      return node;
    }

    if (node.value < value) {
      return this.findRecursive(value, node.right);
    } else if (node.value > value) {
      return this.findRecursive(value, node.left);
    }
  }

  print(node = this.root) {
    if (!node) {
      return;
    }
    this.print(node.left);
    console.log(node.value);
    this.print(node.right);
  }

  isIdentical(x, y) {
    if (x == null && y == null) {
      return true;
    }

    if (x === null || y === null) {
      return false;
    }

    return (
      x.value == y.value &&
      this.isIdentical(x.left, y.left) &&
      this.isIdentical(x.right, y.right)
    );
  }

  isIdenticalTree(tree) {
    return this.isIdentical(this.root, tree.root);
  }

  copy(root) {
    if (root === null) {
      return null;
    }
    let newRoot = new Node(root.value);
    newRoot.left = this.copy(root.left);
    newRoot.right = this.copy(root.right);
    return newRoot;
  }

  copyTree() {
    return new BinaryTree(this.copy(this.root));
  }

  printNodesAtLevel(root, level) {
    if (root === null) {
      return;
    }

    if (level === 1) {
      console.log(root.value);
    } else if (level > 1) {
      this.printNodesAtLevel(root.left, level - 1);
      this.printNodesAtLevel(root.right, level - 1);
    }
  }

  printNodesAtLevelData(level) {
    console.log(`Nodos del nivel ${level}:`);
    this.printNodesAtLevel(this.root, level);
  }

  countLeaves(root) {
    if (root === null) {
      return 0;
    }

    if (root.left === null && root.right === null) {
      return 1;
    }

    return this.countLeaves(root.left) + this.countLeaves(root.right);
  }

  countLeavesInTree() {
    return this.countLeaves(this.root);
  }
}

module.exports = BinaryTree;
