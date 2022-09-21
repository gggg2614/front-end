function getname() {
    let name1
    function getname1() {
        name1 = 12
        return name1
    }
    return getname1
}
console.log(getname()());