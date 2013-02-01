var depth = 0;
var depthMax = 10000;
function f(x) {
    // x = 12
    var y = Math.sqrt(x*x + 25) + Math.sqrt(x*x + 81);
    return y - 28;
}
// 初始上下界
function erFen(a, b) {
    var ya = f(a);
    var yb = f(b);
    if(ya == 0) return a;
    if(yb == 0) return b;
    if(ya * yb > 0) return false;
    var c = (a + b) / 2;
    depth++;
    console.log('Depth: '+depth);
    console.log('('+a+','+b+')');
    console.log(c);
    if(depth > depthMax) return c;
    var yc = f(c);
    if(yc == 0) return c;
    if(yc * ya < 0) {
        return erFen(a, c);
    } else {
        return erFen(c, b);
    }
}
erFen(0, 28)