var person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName: "Bill",
    lastName: "Gates"
}
console.log(
    person.fullName.apply(person1, ["Oslo", "Norway"])
);