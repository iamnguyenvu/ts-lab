// 1. Create a class Person with attributes name and age. Write a method to display this information.
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

// let person = new Person("Vu", 21);
// person.display()


// 2. Write a class Student extending Person with an additional attribute grade. Add a method to
// display all info.
class Student extends Person {
    grade: number;

    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }

    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}

// let student = new Student("Vu", 21, 12)
// student.display()


// 3. Create a class Car with properties brand, model, year. Write a method to show car info.
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

// let car = new Car("Toyota", "Corolla", 2020);
// car.display();

// 4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.
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

// let rectangle = new Rectangle(10, 5);
// rectangle.display();
// console.log(`Area: ${rectangle.calculateArea()}`);
// console.log(`Perimeter: ${rectangle.calculatePerimeter()}`);

// 5. Create a class BankAccount with balance. Add methods deposit() and withdraw().
class BankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        if (amount > this.balance) console.log("Not enough balance~")
        else this.balance -= amount;
    }

    display(): void {
        console.log(`Balance: ${this.balance}`)
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
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    display(): void {
        console.log(`Product - name: ${this.name} - price: ${this.price}`);
    }
}

// let products: Product[] = [];
// products.push(new Product("Sennheiser", 4000))
// products.push(new Product("Sony", 50))
// products.push(new Product("Bose", 400))

// products.filter(p => p.price > 100).forEach(p => p.display())

// 9. Define an interface Animal with name and method sound().
interface Animal {
    name: string;

    sound(): void;
}

// 10. Create a class Account with public, private and readonly fields.
class Account {
    public username: string;
    private password: string;
    public readonly id: number;

    constructor(username: string, password: string, id: number) {
        this.username = username;
        this.password = password;
        this.id = id;
    }
}


// 11. Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().
class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): void {

    }

    bark(): void {
        console.log(`Dog ${this.name} is barking: GAU GAU GAU`)
    }
}

class Cat implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): void {

    }

    meow(): void {
        console.log(`Cat ${this.name} is meowing: MEO MEO MEO`);

    }
}

// let dog = new Dog("Cau vang");
// dog.bark();

// let meo = new Cat("Doraemon");
// meo.meow()

// 12. Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.
interface Flyable {
    name: string;
}

interface Swimmable {
    name: string;
}

class Bird implements Flyable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Fish implements Swimmable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// 13. Create an abstract class Shape with method area(). Implement Square and Circle.
abstract class Shape {
    abstract area(): number;
}

class Square extends Shape {
    constructor(private len: number) {
        super();
    }

    area(): number {
        return this.len * this.len;
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// let square = new Square(5);
// console.log(`Quare area: ${square.area()}`);

// let circle = new Circle(5);
// console.log(`Circle area: ${circle.area()}`);

// 14. Create a base class Employee. Extend Manager and Developer with specific methods.
class Employee {
    constructor(public name: string) { }
    getDetails(): string {
        return `Employee name: ${this.name}`
    }
}

class Manager extends Employee {
    department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    managerDisplay(): void {
        console.log(`${this.name} dang quan ly ${this.department} `);
    }
}

class Developer extends Employee {
     department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    devDisplay(): void {
        console.log(`${this.name} dang la nhan vien cua ${this.department} `);
    }
}

// let manager = new Manager("Nguyen Vu", "Phong Nhan Su");
// manager.managerDisplay()

// let dev = new Developer("Nguyen Vu", "Phong Nhan Su");
// dev.devDisplay()

// 15. Create a Library class that can store Book and User objects. Add method to add books.
class Book {
    constructor(public title: string, public author: string) {}
}

class User {
    constructor(public name: string) {}
}

class Library {
    private books: Book[] = [];
    private users: User[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public addUser(user: User): void {
        this.users.push(user);
    }

    public listBooks(): Book[] {
        return this.books;
    }

    public listUsers(): User[] {
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
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    public getValue(): T {
    return this.value;
  }

  public setValue(newValue: T): void {
    this.value = newValue;
  }
}

// let box = new Box<number>(42);
// console.log(`Number: ${box.getValue()}`);


// 17. Write a singleton Logger class that logs messages to console.
class Logger {
    private static instance: Logger;

    private constructor() {}

    public static getInstance(): Logger {
        if(!Logger.instance) Logger.instance = new Logger();
        return Logger.instance;
    }

    public log(message: string) {
        console.log(`[LOG]: ${message}`);
    }
}

// let log = Logger.getInstance();
// log.log("ERROR");

// 18. Create a static class MathUtil with methods add(), subtract(), multiply(), divide().
class MathUtil {
    private constructor() {}

  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static divide(a: number, b: number): number {
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

