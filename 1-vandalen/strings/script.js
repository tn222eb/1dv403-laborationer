"use strict";

window.onload = function(){

// I denna funktion ska du skriva koden för att hantera "spelet"
var convertString = function(str){

if (str === "" || !isNaN(str)) // Om den är tom eller är ett nummer så kommer fel-meddelande att skrivas ut
{
    throw {message: "Något måste skrivas för omvandling!"};
}

var text = "";         // Variabel för texten
var pattern = /a/ig;  // Variabel som innehåller alla A eller a

for (var i = 0; i < str.length; i++)  // For-loop som ska skriva ut allt
{
if (str.charAt(i) === str.charAt(i).toUpperCase())     // If sats som kollar ifall den är gemener
{
str = str.replace(pattern, "#");                      //  Ersätter alla A eller a med # 
text += str.charAt(i).toLowerCase();                 //   och ifall det är så skriver ut texten i versaler
}
else                                                //    Annars
{
str = str.replace(pattern, "#");                   //     Ersätter alla A eller a med #
text += str.charAt(i).toUpperCase();              //      Skriver ut texten i gemener
}

}



// Plats för förändring.		
// Returnera den konverterade strängen.
return text;
// Vid fel, kasta ett undantag med ett meddelande till användaren. 






	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};