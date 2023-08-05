class Person{
    constructor(name,age,job){
        this.name = name;
        this.age = age;
        this.job = job
    }

    getDetails(){
        return {
            name: this.name,
            age: this.age,
            job: this.job
        }
    }
}

const p1 = new Person();
console.log(p1.getDetails());
//-------
const p2 = new Person('Eklavy Sharma',28,'Developer');
console.log(p2.getDetails());