function Nadd(n) {
    if (n === 1) {
        return 1
    }
    else
        return n + Nadd(n - 1)
}

for (let n = 1; n < 101; n++) {
    console.log(Nadd(n));
}