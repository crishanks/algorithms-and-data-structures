class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter( v => v !== v2 );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter( v => v !== v1 );
  }

  depthFirstRecursive(start) {
    let result = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;

    (function traverse(vertex) {
      if (!vertex) return null;
      if (!visited[vertex]) visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => { if (!visited[neighbor]) return traverse(neighbor); });
    })(start)
    return result;
  }

}

let g = new Graph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

console.log(g);
console.log(g.depthFirstRecursive("A"));