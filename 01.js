// 1.- Escribe una función que dados dos árboles binarios A y B, determine si son idénticos o no.
// 2.- Escribe una función que dado un árbol binario A, obtenga una copia B del mismo.
// 3.- Escribe una función que visualice los nodos que están en el nivel n de un árbol binario.
// 4.- Escribe una función que devuelva el número de hojas de un árbol binario.

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

// 1.- Escribe una función que dados dos árboles binarios A y B, determine si son idénticos o no.
console.log(`Son identicos: ${a.isIdenticalTree(b) ? "Si" : "No"}`);

// 2.- Escribe una función que dado un árbol binario A, obtenga una copia B del mismo.
console.log(`Copia: `);
const treeCopyA = a.copyTree();
treeCopyA.print();

// 3.- Escribe una función que visualice los nodos que están en el nivel n de un árbol binario.
a.printNodesAtLevelData(3);

// 4.- Escribe una función que devuelva el número de hojas de un árbol binario.
console.log(`Hoas en el arbol a: ${a.countLeavesInTree()}`);
