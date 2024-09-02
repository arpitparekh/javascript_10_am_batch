class Person {
    p_name = '';
    age = 0;
    address = '';
    gender = '';
    salary = 0;

    initializeValue(p_name, age, address, gender, salary) {
        this.p_name = p_name;
        this.age = age;
        this.address = address;
        this.gender = gender;
        this.salary = salary;
    }

    displayValues() {
        console.log(this.p_name);
        console.log(this.age);
        console.log(this.address);
        console.log(this.gender);
        console.log(this.salary);
    }
}

let person = new Person();
person.initializeValue('Pradip', 23, 'Vastrapur', 'Male', 10000);
person.displayValues();

console.log();

let person2 = new Person();
person2.initializeValue('Mohit', 27, 'Vadodara', 'Male', 12000);
person2.displayValues();

