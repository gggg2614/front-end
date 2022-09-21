let arr1 = [
  { id: 1, name: "zs" },
  { id: 11, name: "zs" },
  { id: 12, name: "ds" },
  { id: 11, name: "ls" },
  { id: 12, name: "liwu" },
];
let arr2 = [
    { id: 1, name: "zs" },
    { id: 11, name: "zs" },
    { id: 12, name: "ds" },
    { id: 11, name: "ls" },
    { id: 12, name: "liwu" },
    { id: 13, name: "liwu" },
  ];
  
leyt
function merArr(arr) {
    let newArr = [];
    let obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (!obj[arr[i].id]) {
            newArr.push(arr[i]);
            obj[arr[i].id] = true;
        }
    }
    return newArr;
}

console.log(merArr(arr));