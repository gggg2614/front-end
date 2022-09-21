// var obj1 = [
// 	{
// 		 "id": 1,
// 		 "name"  : "Lucy",
//          number:2
// 	},
//     {
// 		 "id": 2,
// 		 "name"  : "Tom"
// 	},
//     {
//         "id": 1,
//         "name"  : "Lucy",
//          number:1
//     },
//  ];
 
// var obj2 = [
// 	{
//         num :1
// 	},
//     {
// 	}
// ];

// var obj = obj1.map((item,index) => {
//     return {...item, ...obj2[index]};
//   });

// console.log(obj);

const oldData = [
    { id: 1, value: '11' },
    { id: 1, value: '12' },
    { id: 2, value: '22' },
    { id: 2, value: '23' },
    { id: 2, value: '24' },
    { id: 3, value: '33' },
    { id: 3, value: '34' },
    { id: 4, value: '44' }
]

const s = new Set() 
oldData.forEach(item => s.add(item.id)) 
let newData = Array.from({ length: s.size }, () => []) 
oldData.forEach(item => {
    let index = [...s].indexOf(item.id) 
    newData[index].push(item) 
})
console.log(newData)