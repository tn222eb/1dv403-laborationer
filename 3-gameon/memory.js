"use strict";

var columns = 4;
var rows = 4;

var Memory = {

// Skapa en array som jag använder som egenskap på objektet som senare kommer att referera till den utslumpade array resultaten
randomArray: [],    
   
init:function() {
// Anropar metoden getPictureArray som slumpar och sparar resultatet i randomArray
Memory.randomArray = RandomGenerator.getPictureArray(columns, rows);
        
console.log(Memory.randomArray);
        
// Anropar metoden generateTable för att rita ut tabellen
Memory.generateTable();
},


generateTable: function() {
    
}
    
};

window.onload = Memory.init;