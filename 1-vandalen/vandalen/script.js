"use strict";

var makePerson = function(persArr){

// Din kod här...

var result = {}; // Skapar ett objekt
var ages = [];  // Skapar en array för ålder
var names = [];  //Skapar en array för namn
var sum; // Deklarerar variabel

// Map gör så att man får person ages-värden i en ny array
ages = persArr.map(function(person){
   return  person.age;
});


// Räkna största åldern genom reduce som i sin tur läser den första sin andra sen sista nummer och komma ihåg dom och kollar vilken nummer är MAX.
result.maxAge = ages.reduce(function(prevAge, age){
    return Math.max(prevAge, age);
});

// Räkna minsta åldern genom reduce som i sin tur läser den första sin andra sen sista nummer och komma ihåg dom och kollar vilken nummer är MIN.
result.minAge = ages.reduce(function(prevAge, age) {
    return Math.min(prevAge, age);
});

//Summa ihop alla tre ålderna med hjälp av metoden reduce
sum = ages.reduce(function(prevAge, age){
    return prevAge + age;
});


// Map gör så att man får person names-värden i en ny array
names = persArr.map(function(person) {
    return person.name;
});

// Sortera bokstäverna i ordning.
names.sort(function(a, b){
   return a.localeCompare(b); 
});

// Skriva ut namn i rätt ordning med komma tecken efter vaje namn
result.names = names.reduce(function(prevName, name) {
    return prevName + ", " + name;
});

// Använder Math.round för att få avrundade siffran efter jag delat värdet med 3 för att få medel åldern.
result.averageAge = Math.round(sum/persArr.length);

// Returnerar resultat
return result;
};


