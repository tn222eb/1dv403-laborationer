"use strict";

// Variabler för antal kolumner och rader i tabellen
var columns = 4;
var rows = 4;

var Memory = {

// Skapa en array som jag använder som egenskap på objektet som senare kommer att referera till den utslumpade array resultaten
randomArray: [],
// Skapar en annan array som jag kommer lägga i a-taggen i
links: [],
// räkna uppvända par
countPair: 0,
// räkna antal försök
countTries: 0,  
   
init:function(){
// Anropar getPictureArray som slumpar och sparar resultatet i randomArray
Memory.randomArray = RandomGenerator.getPictureArray(columns, rows);
        
// Anropar generateTable för att rita ut tabellen
Memory.generateTable();
},

// Ritar ut en tabellen med bilderna
generateTable: function(){
    
// Skapa en table
var table = document.createElement("table");

// Lägger sedan i den i memoryTable
document.getElementById("memoryTable").appendChild(table);

var tile = 0;

// For-loopar antal kolumner och rader för tabellen
for (var row = 0; row < rows; row++){
var tr = document.createElement("tr");
// Lägger i de for-loopade tr-taggarna i table
table.appendChild(tr);

for (var col = 0; col < columns; col++){
var td = document.createElement("td");
// Lägger i de for-loopade td-taggarna i tr-taggarna
tr.appendChild(td);

// Skapar img-tagg och ger den startbilden
var img = document.createElement("img");
img.setAttribute("src", "pics/0.png");

// Skapar a-tagg
var a = document.createElement("a");
a.setAttribute("href", "#");
// Sätter i img-taggen i a-taggen
a.appendChild(img);
// Sätter i a-taggen i td-taggen
td.appendChild(a);

// Anropar turnTile
Memory.turnTile(tile, a);

// Räkna upp variablen tile
tile++;
}
}

},



turnTile: function(t, l){

l.onclick = function(){
//  Det som ska vändas får ej vara något annat än startbilden
if (this.getElementsByTagName("img")[0].getAttribute("src") !== "pics/0.png")
{
return false;
}

// Lägger till a-taggen i arrayen
Memory.links.push(l);
// Ifall längden på arrayen är 1 eller 2 så visas bilden
if (Memory.links.length === 1 || Memory.links.length === 2)
{
this.getElementsByTagName("img")[0].setAttribute("src", "pics/" + Memory.randomArray[t] + ".png");
}

// Ifall bilderna inte stämmer överens, anropas checkTiles funktionen efter en sekund
if (Memory.links.length === 2)
{
setTimeout(function(){
Memory.checkTiles(Memory.links);
}, 900);
}


};

},


// Gör ett test så att om brickorna är lika samma så kommer den fortfarande visas annars räknar räknaren upp med ett.
checkTiles: function(memo_array){
if (memo_array[0].getElementsByTagName("img")[0].getAttribute("src") === memo_array[1].getElementsByTagName("img")[0].getAttribute("src"))
{
// Räkna upp antal uppvända par
Memory.countPair++;
// Ifall antalet par är hälften av samtliga brickor så har man vunnit
if (Memory.countPair === ((columns*rows)/2)){
alert("Congratulations! You won!\nNumber of tries:" + Memory.countTries);
}

// Tömmer arrayens innehåll
Memory.links = [];
}

else
{
// Startbilden visas igen, arrayens innehåll töms
memo_array[0].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
memo_array[1].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
Memory.links = [];
// och räknas upp som ett försök
Memory.countTries++;
}

}

};
window.onload = Memory.init;