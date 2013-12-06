"use strict";

var MessageBoard = {

    // Skapar en array där jag lägger i alla meddelande    
    messages: [],  
        
init:function() {
    // Hämtar ut element "button" och "message" till variabeler   
    var button = document.getElementById("button");
    var textArea = document.getElementById("message");
    // Funktionen createMessage anropas när man klickar på button 
    button.onclick = MessageBoard.createMessage;

        //Lägger en händelsehanterare på onkeydown på elementet "message"
        textArea.onkeydown = function(e){
            if (!e) {
                e = window.event;
            }
        // Om man trycker ner "enter" och "shift" så kommer inget att hända     
            if (e.keyCode === 13 && e.shiftKey === false) {
                MessageBoard.createMessage();
                return false;
            }
        };

},

// Funktionen tar textens innehåll och skapar nytt meddelande
createMessage: function(){
    // Tar elementet "message"s värde och sätter i variabel 
    var messageValue = document.getElementById("message").value;
    // Så att man ej kan skriva in tom sträng
    if ("" === messageValue) {
    return false;
    }
    var mess = new Message(messageValue, new Date());
    // Lägger i den ny skapade meddelandet med texten och datumet sist i arrayen
    MessageBoard.messages.push(mess);
    // Anropar renderMessages för att skriva ut meddelandena
    MessageBoard.renderMessages();
},

// Funktionen skriver ut ett specifikt meddelande                                
renderMessage: function(messageID) {
    var messagearea = document.getElementById("messagearea");
    // Skapar p-tagg för inmatad text
    var p = document.createElement("p");
    p.className = "value";
    p.innerHTML = MessageBoard.messages[messageID].getHTMLText();
    // Skapar div-taggen
    var div = document.createElement("div");
    // Lägger in p-taggen i div
    div.appendChild(p);
    div.className = "message";
    // Lägger i div i messagearea
    messagearea.appendChild(div);
    
    var buttonsDiv = document.createElement("div");
        buttonsDiv.className = "buttons";
    
    // Skapar p-tagg för tidsstämpeln
    var time = document.createElement("p");
    time.className = "clock";
    time.appendChild(document.createTextNode(MessageBoard.messages[messageID].getDateText()));
    
        // Skapar ta bort-knappen
        var imageClose = document.createElement("img");
        imageClose.setAttribute("src", "delete.png");
        
        // Skapar länken på ta bort-knappen
        var linkClose = document.createElement("a");
        linkClose.setAttribute("href", "#");
        linkClose.className = "pictures";
        // Lägger img-taggen i a-taggen
        linkClose.appendChild(imageClose);
          
        // Skapar klock-knappen
        var imageClock = document.createElement("img");
        imageClock.setAttribute("src", "clock.png");
        // Skapar länken på klock-knappen
        var linkClock = document.createElement("a");
        linkClock.setAttribute("href", "#");
        linkClock.className = "pictures";
        // Lägger img-taggen i a-taggen
        linkClock.appendChild(imageClock);
        
        // Lägger i linkClose och Clock i div-taggen buttonsDiv
        buttonsDiv.appendChild(linkClock);
        buttonsDiv.appendChild(linkClose);
        
        // Lägger in tidsstämpeln i div-taggen buttonsDiv
        buttonsDiv.appendChild(time);
        
        // Lägger in buttonsDiv i div-taggen message
		div.appendChild(buttonsDiv);
        
        // Anropar funktionen removeMessage som ska ta bort meddelande ifall man klickar på ta-bort knappen
        imageClose.onclick = function(){
            MessageBoard.removeMessage(messageID);
        };
        
        // Anropar funktionen viewTime som ska visa tiden ifall man klickar på tid knappen
        imageClock.onclick = function(){
            MessageBoard.viewTime(messageID);
        };                                

},

// Funktionen raderar meddelanden   
removeMessage: function(messageID) {
    // Ruta som frågar användaren om man verkligen vill radera meddelandet
    var userconfirmAnswer = confirm("Är du säker på att du vill radera meddelandet?");
    if (userconfirmAnswer) {
    // Tar bort ett meddelande med unikt ID 
    MessageBoard.messages.splice(messageID, 1);
    // För att det ska synas att man har tagit bort meddelandet får man skriva ut dem på nytt
    MessageBoard.renderMessages();
                     }
                                },
                                
// Visar tiden
viewTime: function(messageID){
alert("Ditt meddelande skapades " + MessageBoard.messages[messageID].getDate().toLocaleDateString() + " klockan " + MessageBoard.messages[messageID].getDate().toLocaleTimeString());
},

// Funktionen skriver ut alla meddelande
renderMessages: function(){
    // Rensar textfältet
    document.getElementById("message").value = "";
    // Ta bort alla meddelande
    document.getElementById("messagearea").innerHTML = "";
    // Gör så att räknaren börjar från noll
    document.getElementById("messagecounter").innerHTML = MessageBoard.messages.length;

    // For-loopar antalet meddelande i arrayen och vi gör renderMessage för att rita ut alla meddelande
    for (var i = 0; i < MessageBoard.messages.length; ++i) {
        MessageBoard.renderMessage(i);
                                                           }
                          }

};

window.onload = MessageBoard.init;