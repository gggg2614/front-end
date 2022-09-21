// function Nadd(n) {
//     if (n === 1) {
//         return 1
//     }
//     else
//         return n + Nadd(n - 1)
// }

// for (let n = 1; n < 101; n++) {
//     console.log(Nadd(n));
// }
function num() {
    let num = 0
    function add() {
        num++
        console.log(num);
    }
    function dep() {
        num--
        console.log(num);
    }
    return { add, dep }
}

let a = num()
a.dep()
