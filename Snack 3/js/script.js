"use strict"

// create the function with the parameters it needs

function Snack3(startingIndex, finalIndex, arrayNames) {

    // a new array wiil contain the elements copied from the given array

    let newArray = [];

    // use the foreach method to make the check inside the given array

    arrayNames.forEach( (element, index) => {

        if(index >= startingIndex && index < finalIndex) {

            newArray.push(element);

        }
        
    });



}
