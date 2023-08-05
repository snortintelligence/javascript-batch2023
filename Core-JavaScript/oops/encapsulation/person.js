const person = {
    name: 'John',
    age: 30,
    getFullName: function () {
        return this.name;
    },
    getAge: function () {
        return this.age;
    }
}
console.log('FullName : ', person.getFullName());
console.log('Age : ', person.getAge());

function ceateEmployee(name, age, city, skill) {
    // Private members
    const _name = name;
    const _age = age;
    const _city = city;
    const _skill = skill;
    // public methods
    return {
        //return json response
        getFullName: function () { return _name},
        getAge: function () { return _age},
        getCity: function () { return _city},
        getSkill: function () { return _skill}
    }
}

const e1 = ceateEmployee('Aman', 30, 'Mumbai', 'Finance');
console.log('employee 1: ',e1.getFullName());
console.log('employee 1: ',e1.getAge());
console.log('employee 1: ',e1.getCity());
console.log('employee 1: ',e1.getSkill());