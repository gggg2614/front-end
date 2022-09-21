// let p = new Promise((res,req) => {
//     console.log(132);
//     res()
// }).then(() => {
//     console.log(2);
// })

// async function fun() {
//     return 1
// }
// fun().then((data)=>{
//     console.log(data);
// })

// new Promise((res) => {
//     console.log('res');
// })

async function as() {
    const a = await 20
    return a
}

as().then((data) => {
    console.log(data);
})

console.log(as());