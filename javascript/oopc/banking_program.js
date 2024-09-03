class Bank{

  constructor(name, location, type, initialValue) {
    this.name = name
    this.location = location
    this.type = type
    this.initialValue = initialValue
  }

  deposit(amount) {
    this.initialValue += amount
  }

  withdraw(amount) {
    this.initialValue -= amount
  }

  display() {
    console.log(this.name);
    console.log(this.location);
    console.log(this.type);
    console.log(this.initialValue);
  }

}

b = new Bank('SBI', 'Pune', 'Savings', 10000)
b.withdraw(5000)
b.withdraw(4000)
b.display()
