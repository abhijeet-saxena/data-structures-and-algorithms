class Graph {
  constructor() {
    this._noOfVertices = 0;
    this._adjList = new Map();
  }

  addVertex(vertex) {
    if (this._adjList.has(vertex)) return false;

    this._adjList.set(vertex, []);
    this._noOfVertices++;
    return true;
  }

  addEdge(src, dest, bidirectional = false) {
    this._adjList.get(src).push(dest);
    if (bidirectional) this._adjList.get(dest).push(src);
  }

  printGraph() {
    const vertices = this._adjList.keys();

    for (let vertex of vertices) {
      console.log(vertex + " -> " + this._adjList.get(vertex));
    }
  }

  bfs(rootNode) {
    let visited = {};
    let queue = [];

    queue.push(rootNode);
    while (queue.length !== 0) {
      let popped = queue.shift();

      if (visited[popped]) continue;

      visited[popped] = true;
      queue = [...queue, ...this._adjList.get(popped)];
      console.log(popped);
    }
  }

  dfs(rootNode, visited = {}) {
    console.log(rootNode);
    visited[rootNode] = true;

    let children = this._adjList.get(rootNode);

    for (let i = 0; i < children.length; i++) {
      if (!visited[children[i]]) {
        this.dfs(children[i], visited);
      }
    }
  }
}
