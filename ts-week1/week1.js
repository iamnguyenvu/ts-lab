var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.display = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age));
    };
    return Person;
}());
var person1 = new Person("Alice", 30);
person1.display();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, major) {
        var _this = _super.call(this, name, age) || this;
        _this.major = major;
        return _this;
    }
    Student.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Major: ".concat(this.major));
    };
    return Student;
}(Person));
var student1 = new Student("Bob", 20, "Computer Science");
student1.display();
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.display = function () {
        console.log("Car: ".concat(this.brand, " ").concat(this.model, ", Year: ").concat(this.year));
    };
    return Car;
}());
var car = new Car("Toyota", "Corolla", 2020);
car.display();
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.display = function () {
        console.log("Rectangle: ".concat(this.width, " x ").concat(this.height));
    };
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var rectangle = new Rectangle(10, 5);
rectangle.display();
console.log("Area: ".concat(rectangle.calculateArea()));
console.log("Perimeter: ".concat(rectangle.calculatePerimeter()));
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        }
        else {
            this.balance -= amount;
        }
    };
    BankAccount.prototype.displayBalance = function () {
        console.log("Balance: $".concat(this.balance));
    };
    return BankAccount;
}());
var account = new BankAccount(1000);
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
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.display = function () {
        console.log("Product: ".concat(this.name, ", Price: $").concat(this.price));
    };
    return Product;
}());
var products = [];
products.push(new Product("Laptop", 1200));
products.push(new Product("Smartphone", 800));
products.push(new Product("Tablet", 600));
products.push(new Product("Smartwatch", 300));
products.push(new Product("Headphones", 150));
products.push(new Product("Charger", 50));
products.filter(function (p) { return p.price > 100; }).forEach(function (p) { return p.display(); });
