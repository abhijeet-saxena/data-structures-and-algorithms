# Depth First Search (DFS)

> Depth-first search is another way to navigate a graph from an initial vertex by recursively the first adjacent node of each vertex found.

## How DFS Works?

A standard DFS implementation puts each vertex of the graph into one of two categories:

1. Visited
2. Not Visited

The purpose of the algorithm is to mark each vertex as visited while avoiding cycles.

The DFS algorithm works as follows:

- Start by putting any one of the graph's vertices on top of a stack.
- Take the top item of the stack and add it to the visited list.
  -Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the top of the stack.
- Keep repeating steps 2 and 3 until the stack is empty.

## Complexity

If V is the number of nodes and E is the number of edges.

| Time Complexity | Space Complexity |
| :-------------: | :--------------: |
|    O(V + E)     |       O(V)       |

## DFS Applications

- For finding the path
- To test if the graph is bipartite
- For finding the strongly connected components of a graph
- For detecting cycles in a graph
