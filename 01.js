const BinaryTree = require("./tree");

const a = new BinaryTree();
const b = new BinaryTree();

console.log("Arbol a:");
a.add(1);
a.add(3);
a.add(5);

a.print();

console.log("Arbol b:");
b.add(1);
b.add(3);
b.add(6);

b.print();

console.log(`Son identicos: ${a.isIdenticalTree(b) ? "Si" : "No"}`);

console.log(`Copia: `);
const treeCopyA = a.copyTree();
treeCopyA.print();

a.printNodesAtLevelData(3);

console.log(`Hoas en el arbol a: ${a.countLeavesInTree()}`);
