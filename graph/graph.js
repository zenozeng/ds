// 此实现有参考《数据结构与算法 JavaScript 描述》中图和图算法一章
// Time-stamp: <2015-03-10 09:17:57 Zeno Zeng>

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
// TODO: 为什么测试结果和我想象的不太一样
Graph.prototype.dfs = function(startVerticle) {

    var visited = [];

    var _this = this;

    var dfs = function(verticleIndex) {
        if(!visited[verticleIndex]) {
            console.log('Visiting: ' + _this.verticles[verticleIndex]);
            visited[verticleIndex] = true;
            for(var i = 0; i < _this.adj[verticleIndex].length; i++) {
                dfs(_this.adj[verticleIndex][i]);
            }
        } else {
            // console.log('Ignore: ' + _this.verticles[verticleIndex]);
        }
    };

    dfs(this.verticles.indexOf(startVerticle));
};

module.exports = Graph;
