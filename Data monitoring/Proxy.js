// var people = { name: '123', age: 10 }

// var interceptors = {
//     set: function (receiver, property, value) {
//         console.log(receiver);
//         console.log(property);
//         console.log(value);
//         receiver[property] = value
//     },
//     get:function(target,prop,receiver) {
//         console.log(target);
//         console.log(prop);
//         console.log(receiver);
//        return 101   
//     }
// }

// people = new Proxy(people, interceptors)

// people.name=11

//单继承
// var foo = {
//     pname: 1,
//     foo() {
//         console.log('foo1');
//     }
// }
// var sonoffoo = Object.create(foo)
// sonoffoo.foo()

//多继承
var bar = {
    bar() {
        console.log('bar');
    }
}
var foo = {
    foo() {
        console.log('foo');
    }
}
sonoffoo = new Proxy({}, {
    get: (target, name) => {
        return target[name] || foo[name] || bar[name]
    }
})
sonoffoo.bar()
sonoffoo.foo()