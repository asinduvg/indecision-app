class Person {

    constructor(name = 'anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return 'hi';
    }

    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }

}

class Student extends Person {

    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = `${super.getDescription()} and studying ${this.major}`;
        return description;
    }

}

class Traveller extends Person {

    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }

        return greeting;

    }
}

const me = new Traveller('asindu', 23, 'Matara');
const me2 = new Traveller('chamike', 29);
console.log(me.getGreeting());
console.log(me2.getGreeting());