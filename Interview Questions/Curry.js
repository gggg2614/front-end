// const mult = (a, b, c) => {
//     return a + b + c
// }
// console.log(mult(1, 2, 3));

const curryFunction = a => b => c => a + b + c
function a(a) {
    return function b(b) {
        return function c(c) {
            return a + b + c
        }
    }
}
console.log(a(1)(1)(0));
console.log(curryFunction(1)(2)(0))