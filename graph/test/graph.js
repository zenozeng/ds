// Time-stamp: <2015-03-10 08:13:29 Zeno Zeng>

var Graph = require('../graph');

var graph = new Graph(['A', 'B', 'C', 'D', 'E']);

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('A', 'E');

console.log(graph.toString());
