"use strict";


var Validator = {

// Egenskaper som jag kommer använda för att kontrollera fälten innan skicka
first: false,
last: false,
post: false,
mail: false,


init: function () {

// Hämtar ut de saker som finns i formuläret och sätter i variabeler
var form = document.getElementById("form");
var sendButton = document.getElementById("button");
var fieldSet = document.getElementById("fieldset");

var firstName = document.getElementById("firstname");
var lastName = document.getElementById("lastname");
var postalCode = document.getElementById("postalcode");
var eMail = document.getElementById("email");

// Funktion firstName som kommer validera när användaren tryck bort från rutan 
firstName.onblur = function () {

// Kollar om det är whitespaces
if (!form.elements["firstname"].value.match(/\S/))
{
// Ändrar elementets klass
form.elements["firstname"].className = "error";
// Ser till att formuläret inte skickas
Validator.first = false;


if (!document.getElementById("first").hasChildNodes())
{
// Skapar div-tagg
var div = document.createElement("div");
div.className = "errormessage";
// Lägger i div taggen i span first
document.getElementById("first").appendChild(div);

// Skapar text till div-taggen
var text = document.createTextNode("Detta fält får ej lämnas blankt!");
// Lägger i text i div
div.appendChild(text);

}

}

else 
{
form.elements["firstname"].className = "valid";
Validator.first = true;
var element = document.getElementById("first");
while (element.firstChild)
{
element.removeChild(element.firstChild);
}

}
};

// Funktion lastName som kommer validera när användaren tryck bort från rutan   
lastName.onblur = function () {

// Kollar om det är whitespaces
if (!form.elements["lastname"].value.match(/\S/))
{
// Ändrar elementets klass
form.elements["lastname"].className = "error";
// Ser till att formuläret inte skickas
Validator.last = false;


if (!document.getElementById("last").hasChildNodes()) 
{
// Skapar div-tagg
var div = document.createElement("div");
div.className = "errormessage";
// Lägger i div taggen i span last
document.getElementById("last").appendChild(div);

// Skapar text till div-taggen
var text = document.createTextNode("Detta fält får ej lämnas blankt!");
// Lägger i text i div
div.appendChild(text);
}

}

else
{
form.elements["lastname"].className = "valid";
Validator.last = true;
var element = document.getElementById("last");
while (element.firstChild) {
element.removeChild(element.firstChild);
}

}
};

postalCode.onblur = function () {

}


eMail.onblur = function () {

}



}



};

window.onload = Validator.init;
