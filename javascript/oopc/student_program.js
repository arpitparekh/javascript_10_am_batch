/*
Create a class Student with properties name and grade. Add a method to check if the student has passed (grade ≥ 60). Instantiate an object and call the method.
*/

class Student {

  constructor(name, grade) {
    this.name = name
    this.grade = grade
  }

  passStatus() {
    if (this.grade >= 60) {
      console.log(`${this.name} has passed with grade ${this.grade}`);
    } else {
      console.log(`${this.name} has failed with grade ${this.grade}`);
    }
  }

}

s = new Student('Pradip', 60)
s.passStatus()
s1 = new Student('Mohit', 50)
s1.passStatus()
