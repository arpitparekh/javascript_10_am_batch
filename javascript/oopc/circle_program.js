class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        console.log('Area is : ' + 3.14 * this.radius * this.radius);
    }

  circumference() {
    console.log('Circumference is : ' + 2 * 3.14 * this.radius);
  }
}

c = new Circle(12);
c.area();
c.circumference();
