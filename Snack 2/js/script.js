"use strict"

// an array of football teams contains several properties: name, scored points, fouls

const soccerTeams = [
    {
        name: 'Manchester-United',
        rankingPoints: 0,
        fouls: 0,
    }, {
        name: 'Southampton',
        rankingPoints: 0,
        fouls: 0,
    }, {
        name: 'Everton',
        rankingPoints: 0,
        fouls: 0,
    }, {
        name: 'Leeds',
        rankingPoints: 0,
        fouls: 0,
    }, {
        name: 'Crystal-Palace',
        rankingPoints: 0,
        fouls: 0,
    }, {
        name: 'Newcastle',
        rankingPoints: 0,
        fouls: 0,
    }, {
        name: 'Manchester-City',
        rankingPoints: 0,
        fouls: 0,
    }, {
        name: 'West-Ham',
        rankingPoints: 0,
        fouls: 0,
    }, {
        name: 'Chelsea',
        rankingPoints: 0,
        fouls: 0,
    }, {
        name: 'Liverpool',
        rankingPoints: 0,
        fouls: 0,
    }, {
        name: 'Tottenham',
        rankingPoints: 0,
        fouls: 0,
    }, {
        name: 'Aston-Villa',
        rankingPoints: 0,
        fouls: 0,
    }, {
        name: 'Leichester-City',
        rankingPoints: 0,
        fouls: 0,
    }, {
        name: 'Arsenal',
        rankingPoints: 0,
        fouls: 0,
    }
];

console.log(soccerTeams);

// use forEach method on the array of objects ...

soccerTeams.forEach(team => {

    // ... to randomly create ranking points ... 

    team.rankingPoints = Math.floor(Math.random() * 81);

    // ... and number of fouls

    team.fouls = Math.floor(Math.random() * 301);

});

console.log(soccerTeams);

// using destructuring and a for cycle, I create a new array ... 

const arrayNamesFouls = [];

for ( let i = 0; i < soccerTeams.length; i++ ) {

    // ... whose objects contain only names and numbers of fouls

    const { name, fouls } = soccerTeams[i];

    arrayNamesFouls.push( {name, fouls} );
};

// I print arrayNamesFouls in console

console.log(arrayNamesFouls);