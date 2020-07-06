# Breadth First Search (BFS)

> ## Breadth-first search is a way to navigate a graph from an initial vertex by visiting all the adjacent nodes first.

## How BFS Works?

A standard BFS implementation puts each vertex of the graph into one of two categories:

1. Visited
2. Not Visited

The purpose of the algorithm is to mark each vertex as visited while avoiding cycles.

- Start by putting any one of the graph's vertices at the back of a queue.
- Take the front item of the queue and add it to the visited list.
- Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the back of the queue.
- Keep repeating steps 2 and 3 until the queue is empty.

The graph might have two different disconnected parts so to make sure that we cover every vertex, we can also run the BFS algorithm on every node

## Complexity

If V is the number of nodes and E is the number of edges.

| Time Complexity | Space Complexity |
| :-------------: | :--------------: |
|    O(V + E)     |       O(V)       |

## BFS Applications

- To build index by search index
- For GPS navigation
- Path finding algorithms
- In Ford-Fulkerson algorithm to find maximum flow in a network
- Cycle detection in an undirected graph
- In minimum spanning tree
