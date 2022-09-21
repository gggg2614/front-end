// var str = "antzone";
// var obj = str.split("").reduce(function (x, y) {
//     return (x[y]++ || (x[y] = 1), x);
// }, {});
// console.log(obj);

var str = 'abcdd'
var obj = str.split('').reduce(function (x, y) {
    return (x[y]++ || (x[y] = 1), x)
}, {})

console.log(obj);