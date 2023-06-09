"use strict"

// create the function with the parameters it needs

function Snack3(startingIndex, finalIndex, arrayNames) {

    // a new array wiil contain the elements copied from the given array

    let newArray = [];

    // use the foreach method to make the check inside the given array

    arrayNames.forEach( (element, index) => {

        if(index > startingIndex && index < finalIndex) {

            newArray.push(element);

        }
        
    });

    console.log(newArray);

    return newArray;

};

// call the function by inserting parameters

Snack3(2, 6, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'n']);

