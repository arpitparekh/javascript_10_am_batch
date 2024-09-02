// oopc
// object oriented programming language
// we divide our code in class blocks

// class
// class is a blueprint
// class contains variables(attributes) and methods(member functions)

class Student{  // blueprint

  id = 12
  name = "Bascom"
  location = "Vastrapur"

  display() {
    console.log("This is display function");
  }
}

// object
// object is an instance of class
// object is used to access variables(atributes) and methods(member functions) of class

let obj = new Student()   // memory allocxation while creation of object
obj.id = 15
console.log(obj.id);
console.log(obj.name);
console.log(obj.location);

obj.display()

let obj2 = new Student()
console.log(obj2.id);
console.log(obj2.name);
console.log(obj2.location);

obj2.display()




