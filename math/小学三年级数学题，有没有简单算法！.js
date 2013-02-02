// （）/7=（）余6
// （）/8=（）余1
// （）/9=（）余5
// 求前边括号内最小数，后边括号随意。有没有简单算法，求解释

function f(x) {
    for(var i=0;i<x;i++)
    {
        if(i % 7 != 6) continue;
        if(i % 8 != 1) continue;
        if(i % 9 != 5) continue;
        return i;
    }
}
f(10000);