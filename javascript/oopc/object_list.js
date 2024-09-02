class Car{
  id = 0
  name = ""
  price = 0
  color = ""
}

let car1 = new Car()   // object is a data container
car1.id = 1
car1.name = "BMW"
car1.price = 100
car1.color = "Black"

let car2 = new Car()
car2.id = 2
car2.name = "Audi"
car2.price = 200
car2.color = "White"

let car3 = new Car()
car3.id = 3
car3.name = "Mercedes"
car3.price = 300
car3.color = "Red"

let car4 = new Car()
car4.id = 4
car4.name = "Ferrari"
car4.price = 400
car4.color = "Blue"

cars = [car1, car2, car3, car4]
console.log(cars);
