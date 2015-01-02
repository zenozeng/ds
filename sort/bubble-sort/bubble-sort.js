// 参考 wiki 上的 C 实现：http://zh.wikipedia.org/wiki/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F
// Time-stamp: <2015-01-02 19:31:55 Zeno Zeng>

var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(function() {
    return Math.random() > 0.5;
});

var bubbleSort = function(array) {
    var len = array.length;
    var tmp;
    for(var i = 0; i < len; i++) {
        for(var j = 0; j < len - 1 - i; j++) {
            if(array[j] > array[j + 1]) {
                tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
};

console.log(data);
bubbleSort(data);
console.log(data);
