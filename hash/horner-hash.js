// Horner's method to hash string
// Time-stamp: <2015-02-04 19:54:17 Zeno Zeng>

/*
 * 霍纳哈希
 * str 为要哈希的字符串，len 是存放数据的数组长度
 */
var hash = function(str, len) {
    var num = 0;
    var prime = 31;
    for(var i = 0; i < str.length; i++) {
        num = prime * num + str.charCodeAt(i);
    }
    return num % len;
};

module.exports = hash;
