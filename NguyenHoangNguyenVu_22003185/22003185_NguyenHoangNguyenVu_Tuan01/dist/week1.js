"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Create a class Person with attributes name and age. Write a method to display this information.
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
// let person = new Person("Vu", 21);
// person.display()
// 2. Write a class Student extending Person with an additional attribute grade. Add a method to
// display all info.
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
// let student = new Student("Vu", 21, 12)
// student.display()
// 3. Create a class Car with properties brand, model, year. Write a method to show car info.
class Car {
    brand;
    model;
    year;
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    display() {
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
    }
}
// let car = new Car("Toyota", "Corolla", 2020);
// car.display();
// 4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    display() {
        console.log(`Rectangle: ${this.width} x ${this.height}`);
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
// let rectangle = new Rectangle(10, 5);
// rectangle.display();
// console.log(`Area: ${rectangle.calculateArea()}`);
// console.log(`Perimeter: ${rectangle.calculatePerimeter()}`);
// 5. Create a class BankAccount with balance. Add methods deposit() and withdraw().
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance)
            console.log("Not enough balance~");
        else
            this.balance -= amount;
    }
    display() {
        console.log(`Balance: ${this.balance}`);
    }
}
// let ba = new BankAccount(200);
// ba.deposit(200);
// ba.display();
// ba.withdraw(400);
// ba.display();
// ba.withdraw(200);
// ba.display();
// 6. Create a class Book with attributes title, author, year.
// class Book {
//     title: string;
//     author: string;
//     year: number;
//     constructor(title: string, author: string, year: number) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
//     display(): void {
//         console.log(`Book
//             - title: ${this.title}
//             - author: ${this.author}
//             - year: ${this.year}`)
//     }
// }
// let b = new Book("Hai so phan", "Jeff. Archer", 1975)
// b.display()
// 7. Write a class User with private property name and getter/setter.
// class User {
//     name: string;
//     constructor(name: string) {
//         this.name = name
//     }
//     public get getName() {
//         return this.name
//     }
//     public set setName(newName: string) {
//         this.name = newName;
//     }
//     display(): void {
//         console.log(`Name: ${this.name}`);
//     }
// }
// let user = new User("")
// user.display();
// user.setName = "Vu"
// user.display();
// console.log(`My name is ${user.getName}`)
// 8. Create a Product class with name, price. Create an array of products and filter products with
// price > 100.
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    display() {
        console.log(`Product - name: ${this.name} - price: ${this.price}`);
    }
}
// 10. Create a class Account with public, private and readonly fields.
class Account {
    username;
    password;
    id;
    constructor(username, password, id) {
        this.username = username;
        this.password = password;
        this.id = id;
    }
}
// 11. Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().
class Dog {
    name;
    constructor(name) {
        this.name = name;
    }
    sound() {
    }
    bark() {
        console.log(`Dog ${this.name} is barking: GAU GAU GAU`);
    }
}
class Cat {
    name;
    constructor(name) {
        this.name = name;
    }
    sound() {
    }
    meow() {
        console.log(`Cat ${this.name} is meowing: MEO MEO MEO`);
    }
}
class Bird {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Fish {
    name;
    constructor(name) {
        this.name = name;
    }
}
// 13. Create an abstract class Shape with method area(). Implement Square and Circle.
class Shape {
}
class Square extends Shape {
    len;
    constructor(len) {
        super();
        this.len = len;
    }
    area() {
        return this.len * this.len;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
// let square = new Square(5);
// console.log(`Quare area: ${square.area()}`);
// let circle = new Circle(5);
// console.log(`Circle area: ${circle.area()}`);
// 14. Create a base class Employee. Extend Manager and Developer with specific methods.
class Employee {
    name;
    constructor(name) {
        this.name = name;
    }
    getDetails() {
        return `Employee name: ${this.name}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    managerDisplay() {
        console.log(`${this.name} dang quan ly ${this.department} `);
    }
}
class Developer extends Employee {
    department;
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    devDisplay() {
        console.log(`${this.name} dang la nhan vien cua ${this.department} `);
    }
}
// let manager = new Manager("Nguyen Vu", "Phong Nhan Su");
// manager.managerDisplay()
// let dev = new Developer("Nguyen Vu", "Phong Nhan Su");
// dev.devDisplay()
// 15. Create a Library class that can store Book and User objects. Add method to add books.
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Library {
    books = [];
    users = [];
    addBook(book) {
        this.books.push(book);
    }
    addUser(user) {
        this.users.push(user);
    }
    listBooks() {
        return this.books;
    }
    listUsers() {
        return this.users;
    }
}
// let lib = new Library();
// lib.addBook(new Book("Hai so phan", "JA"));
// lib.addUser(new User("Nguyen Vu"));
// lib.listBooks().forEach(b => {
//     console.log(`Book- title: ${b.title}, author: ${b.author}`);
// });
// 16. Create a generic class Box that can store any type of value.
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(newValue) {
        this.value = newValue;
    }
}
// let box = new Box<number>(42);
// console.log(`Number: ${box.getValue()}`);
// 17. Write a singleton Logger class that logs messages to console.
class Logger {
    static instance;
    constructor() { }
    static getInstance() {
        if (!Logger.instance)
            Logger.instance = new Logger();
        return Logger.instance;
    }
    log(message) {
        console.log(`[LOG]: ${message}`);
    }
}
// let log = Logger.getInstance();
// log.log("ERROR");
// 18. Create a static class MathUtil with methods add(), subtract(), multiply(), divide().
class MathUtil {
    constructor() { }
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0) {
            throw new Error("Khong the chia cho 0");
        }
        return a / b;
    }
}
console.log(`Add: 5 + 3 = ${MathUtil.add(5, 3)}`);
// 19. Demonstrate method overriding using polymorphism with Animal and subclasses.
// 20. Write a Vehicle interface and implement it in Car and Bike classes.
// 21. Create a generic Repository class with methods add(), getAll().
// 22. Create a class Stack with push, pop, peek, isEmpty methods.
// 23. Create an interface Payment with method pay(amount). Implement CashPayment and
// CardPayment.
// 24. Create an abstract class Appliance with method turnOn(). Implement Fan and AirConditioner.
// 25. Create a class Shape with a static method describe().
// 26. Create a class Order with list of products. Add method to calculate total price.
// 27. Create a class Teacher that extends Person. Add subject attribute and introduce method.
// 28. Create a class Animal with protected method makeSound(). Extend Dog and Cat to override it.
// 29. Create an interface Movable with method move(). Implement it in Car and Robot.
// 30. Create a class School with list of Students and Teachers. Add method to display info.
//# sourceMappingURL=week1.js.map