// Time-stamp: <2015-01-02 20:19:32 Zeno Zeng>

var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(function() {
    return Math.random() > 0.5;
});

var onsort = function(i, j1, j2, array) {
    console.log({i: i, j1: j1, j2: j2});
    console.log(array);
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, 100);
    });
};

var bubbleSortAsync = function(array, onsort) {
    var len = array.length;
    array = array.concat();
    var iterIJ = function(i, j) {
        if(i < len) {
            if(j < len - 1 - i) {
                if(array[j] > array[j+1]) {
                    var tmp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = tmp;
                }
                onsort(i, j, j + 1, array.concat()).then(function() {
                    iterIJ(i, j + 1);
                });
            } else {
                iterIJ(i + 1, 0);
            }
        } else {
            console.log('done');
        }
    };
    iterIJ(0, 0);
};

bubbleSortAsync(data, onsort);
