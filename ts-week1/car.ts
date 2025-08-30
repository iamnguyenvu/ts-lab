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