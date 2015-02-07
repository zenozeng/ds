// Time-stamp: <2015-02-07 18:48:49 Zeno Zeng>
// http://codingko.com/index.php/article/article?&t=0&s=258

var BKDRHash = function(str) {
    var seed = 131;
    var hash = 0;
    for(var i = 0; i < str.length; i++) {
        hash = hash * seed + str.charCodeAt(i);
    }
    return hash;
};
