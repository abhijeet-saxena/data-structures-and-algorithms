# Graphs

> A graph is a data structure where a node can have zero or more adjacent elements.

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
