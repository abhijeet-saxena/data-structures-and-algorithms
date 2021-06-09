# Graphs

> ## A graph is a data structure where a node can have zero or more adjacent elements.

More precisely, a graph is a data structure (V, E) that consists of -

- A collection of vertices V
- A collection of edges E, represented as ordered pairs of vertices (u,v)

## Graph Terminology

- `Edge` : The connection between two nodes
- `Adjacency` : A vertex is said to be adjacent to another vertex if there is an edge connecting them
- `Degree` : Number of edges connected to a vertex
- `Path` : A sequence of edges that allows you to go from vertex A to vertex B is called a path
- `Directed Graph` : A graph in which the edges do not point in a particular direction
- `Undirected Graph` : A graph in which the edges do not point in any direction
- `Connected Graph` : A graph in which there is always a path from a vertex to any other vertex
- `Complete Graph` : When all nodes are connected to all other nodes
- `Weighted Graph` : When edges have values/cost assigned to them. If the weight is absent, we can assume it’s 1.

## Graph Representation

- `Adjacency Matrix` : An adjacency matrix is a 2D array of V x V vertices. Each row and column represent a vertex.

  - If the value of any element a[i][j] is 1, it represents that there is an edge connecting vertex i and vertex j.
  - Edge lookup(checking if an edge exists between vertex A and vertex B) is extremely fast in adjacency matrix representation but we have to reserve space for every possible link between all vertices(V x V), so it requires more space.
  - The biggest advantage however, comes from the use of matrices. The recent advances in hardware enable us to perform even expensive matrix operations on the GPU.

- `Adjacency List` : An adjacency list represents a graph as an array of linked lists. The index of the array represents a vertex and each element in its linked list represents the other vertices that form an edge with the vertex.
  - An adjacency list is efficient in terms of storage because we only need to store the values for the edges.

## Graph Operations

1. Check if the element is present in the graph
2. Graph Traversal
3. Add elements(vertex, edges) to graph
4. Finding the path from one vertex to another

## Ways to search ?

- `Breadth-first search (BFS)` : Breadth-first search is a way to navigate a graph from an initial vertex by visiting all the adjacent nodes first.

- `Depth-first search (BFS)` : Depth-first search is another way to navigate a graph from an initial vertex by recursively the first adjacent node of each vertex found.

## Implementation

```js
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return false;
    this.adjacencyList[vertex] = [];
    return true;
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(v) {
    while (this.adjacencyList[v].length) {
      const popped = this.adjacencyList[v].pop();
      this.removeEdge(popped, v);
    }
    delete this.adjacencyList[v];
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};

    const dfs = (vertex) => {
      if (!vertex) return;
      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((link) => {
        if (!visited[link]) return dfs(link);
      });
    };

    dfs(start);

    return result;
  }

  depthFirstIterative(start) {
    const result = [];
    let elemLeft = [start];
    const visited = {};

    while (elemLeft.length > 0) {
      let popped = elemLeft.pop();

      if (!visited[popped]) {
        visited[popped] = true;
        elemLeft = [...elemLeft, ...this.adjacencyList[popped]];
        result.push(popped);
      }
    }

    return result;
  }

  breadthFirst(start) {
    const result = [];
    let elemLeft = [start];
    const visited = {};

    while (elemLeft.length > 0) {
      let popped = elemLeft.shift();

      if (!visited[popped]) {
        visited[popped] = true;
        elemLeft = [...elemLeft, ...this.adjacencyList[popped]];
        result.push(popped);
      }
    }

    return result;
  }
}

var graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

//        A
//     /    \
//     B    C
//     |    |
//     D —— E
//      \  /
//       F

console.log(graph.adjacencyList);

// {
//   A: [ 'B', 'C' ],
//   B: [ 'A', 'D' ],
//   C: [ 'A', 'E' ],
//   D: [ 'B', 'E', 'F' ],
//   E: [ 'C', 'D', 'F' ],
//   F: [ 'D', 'E' ]
// }

console.log(graph.depthFirstRecursive("A")); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log(graph.depthFirstIterative("A")); // [ 'A', 'C', 'E', 'F', 'D', 'B' ]
console.log(graph.breadthFirst("A")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
```
