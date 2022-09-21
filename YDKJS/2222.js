let arr = [
  { id: 1, name: "jack", amount: 1 },
  { id: 1, name: "jack", amount: 1 },
  { id: 2, name: "jack", amount: 1 },
  { id: 2, name: "jack", amount: 1 },
  { id: 2, name: "jack", amount: 1 },
  { id: 2, name: "jack", amount: 1 },
  { id: 2, name: "jack", amount: 1 },
  { id: 3, name: "jack", amount: 1 },
  { id: 3, name: "jack", amount: 1 },
];

function merArr(arr) {
  let obj = {};
  arr.forEach(
    (v) =>
      (obj[v.id] = obj[v.id] === undefined ? v.amount : obj[v.id] + v.amount)
  );
  return obj;
}
console.log(merArr(arr));
