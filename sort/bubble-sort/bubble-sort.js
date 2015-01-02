// Time-stamp: <2015-01-02 19:30:36 Zeno Zeng>

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
