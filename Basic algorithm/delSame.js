var nums = [3, 33, 333, 3333, 3]

var newnums = nums.map((v, i, a) => {
    return new Set(a)
}).splice(nums.length - 1)

console.log(newnums);