// var a = [1, 2, 3, [4, 5], [6, [7, [8, 1, 2, 3]]]]

// // b = a.flat(Infinity)

// function myflat(arr) {
//     const result = []
//     arr.forEach(i => {
//         if (Array.isArray(i)) {
//             result.push(...myflat(i))
//         }
//         else result.push(i)
//     });
//     return result
// }
// let b = myflat(a)

// console.log(new Set(b));

// let c = [3, 2, 1]
// console.log(c.sort((a, b) => b - a));
// console.log(c.sort((a, b) => a - b));

// let a = [1, 2, 3]
// let c = a.map((v, i, array) => {
//     return v
// })

// let b = a.forEach((v, i, array) => {
//     array[1] = 100
// })

// console.log(c);
// console.log(a);
function hoistFunction() {
    foo();

    var foo = function () {
        console.log(1);
    };

    foo();
    
    function foo() {
        console.log(2);
    }

    foo();
}

hoistFunction();