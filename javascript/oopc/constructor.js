// contructor
// contrcutor is method (function)
// contructor is used to initialize variables
// contrcutor is called automatically when object is created
// contrcutor has same name as class name
// contructor is used to create an object
// constrcutor has no return type

class Product {

    constructor(id, name, price, color) {
      this.id = id
      this.name = name
      this.price = price
      this.color = color
    }

    display() {
      console.log(this.id);
      console.log(this.name);
      console.log(this.price);
      console.log(this.color);
    }

    // constructor() {
    //     console.log('This is constructor');
    // }
}

let obj = new Product(1, 'Apple', 100, 'Red');
obj.display()
let obj2 = new Product(2, 'Lenovo', 200, 'Yellow');
obj2.display()

