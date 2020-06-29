# Graphs

A graph is a data structure where a node can have zero or more adjacent elements.

The connection between two nodes is called **edge**. Nodes can also be called **vertices**.

The **degree** is the number of edges connected to a vertex.

If the edges are bi-directional, then we have an **undirected graph**. But, if the edges have a direction, then we have a **directed graph** or di-graph for short.

Vertex can have edges that go to itself (e.g., blue node), this is called **self-loop**.

A graph can have cycles which means that if you traverse through the node, you could get the same node more than once. The graph without cycles is called **acyclic graph**.

Also, acyclic undirected graphs are called tree. We are going to cover trees in depth in the next post.

Not all vertices have to be connected in the graph. You might have isolated nodes or even separated subgraphs. If all nodes have at least one edge, then we have a **connected graph**. When all nodes are connected to all other nodes, then we have a **complete graph**.

When edges have values/cost assigned to them, we say we have a **weighted graph**. If the weight is absent, we can assume it’s 1.

---

There are two primary ways of representing graph:

#### Adjacency list

Adjacency List is one of the most common ways to represent graphs. Each node has a list of all the nodes connected to it.

Graphs can be represented as an adjacency list using an Array (or HashMap) containing the nodes. Each of these node entries includes a list (array, linked list, set, etc.) that list its adjacent nodes.

#### Adjacency Matrix

The adjacency matrix is one way of representing a graph using a two-dimensional array (NxN matrix). In the intersection of nodes, we add 1 (or other weight) if they are connected and 0 or - if they are not connected.

---

Ways to search ?

#### Breadth-first search (BFS)

Breadth-first search is a way to navigate a graph from an initial vertex by visiting all the adjacent nodes first.

#### Depth-first search (BFS)

Depth-first search is another way to navigate a graph from an initial vertex by recursively the first adjacent node of each vertex found.
