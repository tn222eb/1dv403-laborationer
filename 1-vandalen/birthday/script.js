"use strict";

window.onload = function(){

	
	var birthday = function(date){

        var now;
        var splitBirthDay= [];
        var birthday;
        var msLeft;
        var daysLeft;

        // Din kod här.
   
        if(!date.match(/^(\d{4})([\/-])(\d{1,2})\2(\d{1,2})$/)){
          throw {message: "Fel! Ange födelsedagen på formatet ÅÅÅÅ-MM-DD."};
        }
        
        now = new Date();
        
        splitBirthDay = date.split("-");
        console.log(splitBirthDay);
        
        birthday = new Date(now.getFullYear(), splitBirthDay[1] - 1, splitBirthDay[2]);
        
        if(birthday.getTime() < now.getTime() && birthday.getDate() != now.getDate()){
            birthday.setFullYear(now.getFullYear()+1);
        } 
        
        msLeft = birthday.getTime() - now.getTime();
        daysLeft = Math.floor(((((msLeft /1000) /60) / 60) / 24)+1);

        return daysLeft;



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
			var answer = birthday(input.value); // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};