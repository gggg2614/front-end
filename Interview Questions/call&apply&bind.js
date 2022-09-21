var person1 = { firstName: 'xi', lastName: 'que' }
var person2 = { firstName: 'tuo', lastName: 'sa' }

function invite(greeting1, greeting2) {
    console.log(greeting1 + ',', this.firstName + ' ' + this.lastName + ',' + greeting2);
}

//Call()
invite.call(person1, 'helo', 'sht')

//apply()
invite.apply(person1,['helo','sht'])

//bind()
invite.bind(person1)('helo','sht')