"use strict";

window.onload = function(){
	
var secretNumber = Math.floor( Math.random() * 100)+1; // Slumpar ett tal.
var guesses = 0; // Antal försök som börjar på noll som sedan ökas.


    
// I denna funktion ska du skriva koden för att hantera "spelet"
var makeGuess = function(number){
guesses++; // Ökar med ett varje gång man gör ett försök.

		console.log("Det hemliga talet: " + secretNumber); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
		console.log("Antal gissningar: " + guesses); // Antal försök av användaren.
		

		// Returnera exempelvis:
        // [false, "Talet är utanför intervallet 0 - 100"]	
		if ( number > 100 || number < 0)
		alert("The guessed number is outside the range of 0 - 100");
		else
		{
		// [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."]
		if ( number == secretNumber )
		{
        alert ("Congratulations you won! The secret number was " + secretNumber + " and it took " + guesses + " guesses");
		}
		// [false, "Det hemliga talet är högre!"]
		if ( number < secretNumber)
        {
        alert("The secret number is higher than the guessed number!");
        }
		// [false, "Det hemliga talet är lägre!"]
		if ( number > secretNumber)
		{
		alert("The secret number is lower than the guessed number!");
		}
		// [false, "Det hemliga talet är ett nummer och inte en sträng"]
		if (isNaN(number))
		{
		alert("The secret number is a number and not a string");
		}
		}
	};
	
	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = makeGuess(input.value); // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};