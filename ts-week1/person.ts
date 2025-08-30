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

let person1 = new Person("Alice", 30);
person1.display();

let student1 = new Student("Bob", 20, "Computer Science");
student1.display();