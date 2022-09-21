//1
// var object = new Object()

//2 
// var object = Object.create(null)

//3
// var object={}

//4
// function Person(name) {
//     var object = {}
//     object.name = name
//     object.age = 12
//     return object
// }
// var object = new Person('su')
// console.log(object);

//5
// class Person {
//     constructor(name) {
//         this.name = name
//     }
// }
// var object = new Person('su')
// console.log(object);

//6
var object =  new function(){
    this.name = '123'
}
console.log(Object.getPrototypeOf);