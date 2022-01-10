# Dijkstra's Algorithm

> ## Dijkstra's algorithm allows us to find the shortest path between any two vertices of a graph.

## How Dijkstra's Algorithm works

Dijkstra's Algorithm works on the basis that any subpath B -> D of the shortest path A -> D between vertices A and D is also the shortest path between vertices B and D.

Djikstra used this property in the opposite direction i.e we overestimate the distance of each vertex from the starting vertex. Then we visit each node and its neighbors to find the shortest subpath to those neighbors.

- We need to maintain the path distance of every vertex. We can store that in an array of size v, where v is the number of vertices.

- We also want to be able to get the shortest path, not only know the length of the shortest path. For this, we map each vertex to the vertex that last updated its path length.

- Once the algorithm is over, we can backtrack from the destination vertex to the source vertex to find the path.

- A minimum priority queue can be used to efficiently receive the vertex with least path distance.

## Complexity

If E is the number of edges and V is the number of vertices,

Time Complexity: O(E Log V)

Space Complexity: O(V)

## Dijkstra's Algorithm Applications

- To find the shortest path
- In social networking applications
- In a telephone network
- To find the locations in the map
