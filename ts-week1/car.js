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
