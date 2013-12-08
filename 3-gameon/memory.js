"use strict";

// Variabler för antal kolumner och rader i tabellen
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

// Ritar ut en tabellen med bilderna
generateTable: function(){
    
// Skapa en table
var table = document.createElement("table");

// Lägger sedan i den i memoryTable
document.getElementById("memoryTable").appendChild(table);

// For-loopar antal kolumner och rader för tabellen
 for (var row = 0; row < rows; row++){
            var tr = document.createElement("tr");
            // Lägger i de for-loopade tr-taggarna i table
            table.appendChild(tr);
            
            for (var col = 0; col < columns; col++){
                var td = document.createElement("td");
                // Lägger i de for-loopade td-taggarna i tr-taggarna
                tr.appendChild(td);
                
                // Skapar img-tagg och ger den frågeteckens bilden
                var img = document.createElement("img");
                img.setAttribute("src", "pics/0.png");
                
                // Skapar a-tagg
                var a = document.createElement("a");
                a.setAttribute("href", "#");
                // Sätter i img-taggen i a-taggen
                a.appendChild(img);
                // Sätter i a-taggen i td-taggen
                td.appendChild(a);
                
                                      }
                                      }
    
}

};

window.onload = Memory.init;