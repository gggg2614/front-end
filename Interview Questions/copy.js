// function copyez(obj) {
//     let newobj = {}
//     for (const key in obj) {
//         newobj[key] = obj[key]
//     }
//     return newobj
// }

// function copy(obj) {
//     let newobj = {}
//     for (const key in obj) {
//         if (obj[key] instanceof Object) {
//             newobj[key] = copy(obj[key])
//         }
//         else
//             newobj[key] = obj[key]
//     }
//     return newobj
// }

let xz = {
    name: 'xz',
    age: '12',
    fans: {
        name: 'zz'
    }
}
// let zz = {
//     ...xz
// }
// let xx = copy(xz)
// xx.fans.name = "12"
// zz.fans.name='11'
// console.log(zz);
// console.log(xz);
// console.log(xx);

let str = JSON.stringify(xz)
let newobj = JSON.parse(str)
let copy = Object.assign({},xz)
// newobj.fans.name='12'
copy.age='1124'
copy.fans.name='32'
console.log(newobj);
console.log(xz);
console.log(copy);