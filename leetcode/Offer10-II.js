// 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

function fib(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        var num1 = 1, num2 = 1, res = 0
        for (let i = 2; i <= n; i++) {
            res = (num1 + num2) % 1000000007
            num1 = num2;
            num2 = res
        }
    }
    return res
}

console.log(fib(7));