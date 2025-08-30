class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

let person1 = new Person("Alice", 30);
person1.display();

class Student extends Person {
    major: string;

    constructor(name: string, age: number, major: string) {
        super(name, age);
        this.major = major;
    }

    display(): void {
        super.display();
        console.log(`Major: ${this.major}`);
    }
}

let student1 = new Student("Bob", 20, "Computer Science");
student1.display();

class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    display(): void {
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
    }
}

let car = new Car("Toyota", "Corolla", 2020);
car.display();

class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    display(): void {
        console.log(`Rectangle: ${this.width} x ${this.height}`);
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

let rectangle = new Rectangle(10, 5);
rectangle.display();
console.log(`Area: ${rectangle.calculateArea()}`);
console.log(`Perimeter: ${rectangle.calculatePerimeter()}`);

class BankAccount {
    balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
        }
    }

    displayBalance(): void {
        console.log(`Balance: $${this.balance}`);
    }
}

let account = new BankAccount(1000);
account.displayBalance();
account.deposit(500);
account.displayBalance();
account.withdraw(200);
account.displayBalance();
account.withdraw(200);
account.withdraw(200);
account.withdraw(200);
account.withdraw(200);
account.withdraw(200);
account.withdraw(200);
account.withdraw(200);
account.withdraw(200);
account.displayBalance();

class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    display(): void {
        console.log(`Product: ${this.name}, Price: $${this.price}`);
    }
}

let products: Product[] = [];
products.push(new Product("Laptop", 1200));
products.push(new Product("Smartphone", 800));
products.push(new Product("Tablet", 600));
products.push(new Product("Smartwatch", 300));
products.push(new Product("Headphones", 150));
products.push(new Product("Charger", 50));

products.filter(p => p.price > 100).forEach(p => p.display());

interface Animal {
    name: string;
    age: number;
    makeSound(): void;
}

class Dog implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

class Cat implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    makeSound(): void {
        console.log("Meow!");
    }
}
