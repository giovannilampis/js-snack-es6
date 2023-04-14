"use strict"

// an array of objects contains some bikes and relative weights

const bicycles = [
    {
        name: 'Dahon',
        weight: 13,
    }, {
        name: 'Alex-Moulton',
        weight: 10,
    }, {
        name: 'Bromptonn',
        weight: 10.5,
    }, {
        name: 'Wilier',
        weight: 12,
    }, {
        name: 'Birdy',
        weight: 9.5,
    }, {
        name: 'Dahon',
        weight: '13',
    }, {
        name: 'Allen-Sports-Ultra-X',
        weight: 9.9,
    }, {
        name: 'Helix',
        weight: 11.5,
    }, {
        name: 'Hummingbird',
        weight: 14,
    }
];

// Find out which bike has the lowest weight

let lightestBicycle = bicycles[0];

bicycles.forEach( (bike) => {
    if (bike.weight < lightestBicycle.weight) {
        lightestBicycle = bike;
    }
});

console.log(lightestBicycle);