function fib(n) {
    if (n === 0) {
        return 0;
    }
    else if(n <2){
        return n
    }
    else {
        var num1 = 0, num2 = 1, res = 0
        for (let i = 2; i <= n; i++) {
            res = (num1 + num2) % 1000000007
            num1 = num2;
            num2 = res
        }
    }
    return res
}

console.log(fib(3));