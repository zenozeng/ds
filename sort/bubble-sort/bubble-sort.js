var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(function() {
    return Math.random() > 0.5;
});

var bubbleSort = function(array) {
    var len = array.length;
    var tmp;
    for(var i = 0; i < len; i++) {
        for(var j = len - 1; j > i; j--) {
            if(array[j] > array[i]) {
                tmp = array[j];
                array[j] = array[i];
                array[i] = tmp;
            }
        }
    }
    return array;
};

console.log(data);
bubbleSort(data);
console.log(data);
