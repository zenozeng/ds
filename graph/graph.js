// 此实现有参考《数据结构与算法 JavaScript 描述》中图和图算法一章
// Time-stamp: <2015-03-10 13:02:15 Zeno Zeng>

function Graph(verticles) {
    this.verticles = verticles; // 顶点数组
    this.edges = 0; // 边计数
    this.adj = []; // 邻接表
    for(var i = 0; i < this.verticles.length; ++i) {
        this.adj[i] = [];
    }
}

Graph.prototype.addEdge = function(v1, v2) {
    var i1 = this.verticles.indexOf(v1);
    var i2 = this.verticles.indexOf(v2);
    this.adj[i1].push(i2);
    this.adj[i2].push(i1);
    this.edges++;
};

Graph.prototype.toString = function() {
    var str = '';
    for(var i = 0; i < this.verticles.length; ++i) {
        str += this.verticles[i] + ' ->';
        for(var j = 0; j < this.adj[i].length; ++j) {
            str += ' ' + this.verticles[this.adj[i][j]];
        }
        str += '\n';
    }
    return str;
};

// Depth First Search
Graph.prototype.dfs = function(startVerticle) {

    var visited = [];

    var _this = this;

    var dfs = function(verticleIndex) {
        if(!visited[verticleIndex]) {
            console.log('Visiting: ' + _this.verticles[verticleIndex]);
            visited[verticleIndex] = true;
            _this.adj[verticleIndex].forEach(function(i) {
                console.log('Next: ' + _this.verticles[i]);
                dfs(i);
            });
        }
    };

    dfs(this.verticles.indexOf(startVerticle));
};

Graph.prototype.bfs = function(startVerticle) {
    var _this = this,
        visited = [];

    var queue = [this.verticles.indexOf(startVerticle)];

    while(queue.length > 0) {
        var v = queue.shift();
        if(!visited[v]) {
            console.log('Visiting: ' + _this.verticles[v]);
            visited[v] = true;
            _this.adj[v].forEach(function(i) {
                queue.push(i);
            });
        }
    }
};

module.exports = Graph;
