// function b() {
//     console.log('b');
// }

// b.__proto__.eat = function () {
//     console.log('eat');
// }

// b.eat()

function b() {
}

b.prototype.eat = function () {
    console.log('eat');
}

let newb = new b()

newb.eat()

