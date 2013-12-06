"use strict";

window.onload = function(){

	
	var birthday = function(date){
        // Din kod här.


        // Deklarera variabler
        var currentDate;
        var splitbirthDay= []; // Array för att dela upp
        var millisecondsLeft; // Hålla koll på milli sekunderna
        var daysLeft;  // Hålla koll på antal dagar kvar
        var birthday;
        
        // If sats som kollar ifall något som inte matchar formatet så kommer fel meddelande visas
        if(!date.match(/^(\d{4})([\/-])(\d{1,2})\2(\d{1,2})$/)){
          throw {message: "Fel! Ange födelsedagen på formatet ÅÅÅÅ-MM-DD."};
        }
        
        // Skapar nytt Date-objekt och döper det till currentDate
        currentDate = new Date();
    
        // Gör så att - försvinner
        splitbirthDay = date.split("-");
        console.log(splitbirthDay);
        
        // Skapar nytt Date-objekt och döper det till birthday och skickar in året, månaden - 1 för man får en för mycket och dagen.
        birthday = new Date(currentDate.getFullYear(), splitbirthDay[1] - 1, splitbirthDay[2]);
        
        
        // If-sats som kollar ifall du har fyllt om du har de så kommer de kolla hur lång tid det kommer ta för dig att fylla efter du fyllt
        if(birthday.getTime() < currentDate.getTime() && birthday.getDate() != currentDate.getDate()){
            birthday.setFullYear(currentDate.getFullYear()+1);
        } 
        
        // Får antalet millisekunder kvar
        millisecondsLeft = birthday.getTime() - currentDate.getTime();
        
        // Genom avrunda med hjälp av Math.floor så får vi exakta värdet efter vi dividerat av daysLeft
        daysLeft = Math.floor(((((millisecondsLeft /1000) /60) / 60) / 24)+1);


        // Returnera antal dagar kvar
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