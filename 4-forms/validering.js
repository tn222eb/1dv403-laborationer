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

// Kollar om det är något annat än a-zåäö
if (!form.elements["firstname"].value.match(/^[a-zåäö]+$/i))
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
var text = document.createTextNode("Fältet får ej lämnas blankt");
// Lägger i text i div
div.appendChild(text);

}

}

else 
{
// Ger klassen valid som i sin tur gör rutan grön    
form.elements["firstname"].className = "valid";
// Ser till att formuläret skickas
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

// Kollar om det är något annat än a-zåäö
if (!form.elements["lastname"].value.match(/^[a-zåäö]+$/i))
{
// Ger klassen error som i sin tur gör rutan röd
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
var text = document.createTextNode("Fältet får ej lämnas blankt");
// Lägger i text i div
div.appendChild(text);
}

}

else
{
// Ger klassen valid som i sin tur gör rutan grön   
form.elements["lastname"].className = "valid";
Validator.last = true;
var element = document.getElementById("last");
while (element.firstChild) {
element.removeChild(element.firstChild);
}

}
};

postalCode.onblur = function (){

if(form.elements["postalcode"].value.match(/^(SE)?[\ ]?[0-9]{3}(-|\ )?[0-9]{2}$/))
{
form.elements["postalcode"].value = form.elements["postalcode"].value.replace(/(SE|\ |-)/g, '');
// Ger klassen valid som i sin tur gör rutan grön  
form.elements["postalcode"].className = "valid";
// Ser till att formuläret skickas
Validator.postal = true;
var element = document.getElementById("postal");
while (element.firstChild) {
element.removeChild(element.firstChild);
}
}

else
{
// Ger klassen error som i sin tur gör rutan röd    
form.elements["postalcode"].className = "error"; 
Validator.postal = false;

if (!document.getElementById("postal").hasChildNodes()) {
var div = document.createElement("div");
div.className = "errormessage";
document.getElementById("postal").appendChild(div);

var text = document.createTextNode("Fyll i ett korrekt postnummer");
div.appendChild(text)


}

}
},


eMail.onblur = function (){

if (!form.elements["email"].value.match(/^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/i)) {
// Ger klassen error som i sin tur gör rutan röd    
form.elements["email"].className = "error";
Validator.mail = false;

if (!document.getElementById("mail").hasChildNodes()) {
var div = document.createElement("div");
div.className = "errormessage";
document.getElementById("mail").appendChild(div);

var text = document.createTextNode("Fyll i en korrekt e-postadress");
div.appendChild(text);
}

}

else 
{
// Ger klassen valid som i sin tur gör rutan grön      
form.elements["email"].className = "valid";
// Ser till att formuläret inte skickas
Validator.mail = true;
var element = document.getElementById("mail");
while (element.firstChild) {
element.removeChild(element.firstChild);
                           }
}  

};

// Skicka funktion
sendButton.onclick = function () {
// Ifall någon av dessa är false så kommer det inte gå skickas
if ((Validator.first === false)||(Validator.last === false)||(Validator.postal === false)||(Validator.mail === false)) 
{
return false;
}

// Skapar div-tagg för att använda som skuggbakgrund
var background = document.createElement("div");
background.className = "background";
// Sätter i den i body
document.body.appendChild(background);

// Skapar en annan div-tagg som kommer användas för popup fönster
var div = document.createElement("div");
div.className = "popupWindow";

document.body.appendChild(div);

var h3 = document.createElement("h3");
var header = document.createTextNode("Vänligen bekräfta ditt köp!");

div.appendChild(h3);
h3.appendChild(header);

var p = document.createElement("p");
var fname = document.createTextNode (form.elements["firstname"].name + ": " + form.elements["firstname"].value);
p.appendChild(fname);
div.appendChild(p);

p = document.createElement("p");
var lname = document.createTextNode (form.elements["lastname"].name + ": " + form.elements["lastname"].value);
p.appendChild(lname);
div.appendChild(p);

p = document.createElement("p");
var postnumber = document.createTextNode (form.elements["postalcode"].name + ": " + form.elements["postalcode"].value);
p.appendChild(postnumber);
div.appendChild(p);

p = document.createElement("p");
var epost = document.createTextNode (form.elements["email"].name + ": " + form.elements["email"].value);
p.appendChild(epost);
div.appendChild(p);

p = document.createElement("p");
var price = document.createTextNode (form.elements["price"].name + ": " + form.elements["price"].value);
p.appendChild(price);
div.appendChild(p);

var closeButton = document.createElement("input");
closeButton.type = "button";
closeButton.value = "Ändra";
div.appendChild(closeButton);

closeButton.onclick = function() {
// Har på fältet i formuläret
form.elements["firstname"].disabled = false;
form.elements["lastname"].disabled = false;
form.elements["postalcode"].disabled = false;
form.elements["email"].disabled = false;
form.elements["price"].disabled = false;
form.elements["button"].disabled = false;
// Tar bort popup fönster och skuggbakgrund
document.body.removeChild(div);
document.body.removeChild(background);
}; 

var sendButton = document.createElement("input");
sendButton.type = "submit";
sendButton.value = "Bekräfta ditt köp";
div.appendChild(sendButton);

sendButton.onclick = function() {
form.elements["firstname"].disabled = false;
form.elements["lastname"].disabled = false;
form.elements["postalcode"].disabled = false;
form.elements["email"].disabled = false;
form.elements["price"].disabled = false;
form.elements["button"].disabled = false;
form.submit();
}; 

// Avaktiverar fälten i formuläret
form.elements["firstname"].disabled = true;
form.elements["lastname"].disabled = true;
form.elements["postalcode"].disabled = true;
form.elements["price"].disabled = true;
form.elements["email"].disabled = true;
form.elements["button"].disabled = true;

return false;

};

}



};

window.onload = Validator.init;
