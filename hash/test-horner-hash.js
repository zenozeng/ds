var hash = require('./horner-hash');

[
    "测试",
    "abcdedsfds",
    "HelloWorld",
    "This is a test",
    "我这是个测试"
].forEach(function(item) {
    console.log(item + " => " + hash(item, 137));
});
