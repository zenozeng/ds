var Graph = require('../graph');

var graph = new Graph([1, 21, 22, 23, 31, 32, 33, 41, 42, 43]);

graph.addEdge(1, 21);
graph.addEdge(1, 22);
graph.addEdge(1, 23);

graph.addEdge(21, 31);
graph.addEdge(22, 32);
graph.addEdge(23, 33);

graph.addEdge(31, 41);
graph.addEdge(32, 42);
graph.addEdge(33, 43);

graph.bfs(1);
