// arguments object - no longer bound with arrow functions
// this keyword - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

add(55, 1);

const user = {
    name: 'Asindu',
    cities: ['Matara', 'Galle', 'Colombo'],
    printPlacesLived: function() {
        console.log(this.name);
        console.log(this.cities);
    }
}

// user.printPlacesLived();

const multiplier = {
    numbers: [1, 2, 3],
    multiplier: 2,
    multiply: function() {
        return this.numbers.map(number => number * this.multiplier)
    }
}

console.log(multiplier.multiply());