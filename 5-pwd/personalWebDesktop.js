"use strict";

var personalWebDesktop = {

init: function () {

var icon = document.getElementById("icon");
// Antalet click på ikonen
var onclick = 0;
// Skapar div-tagg
var div = document.createElement("div");
div.className = "icon";

// Skapar img-tagg som jag sätter den till visst utseende samt ger den en klass
var image = document.createElement("img");
image.setAttribute("src", "pics/iconimage.png");
image.className = "iconImage";

// Skapar a-tagg
var a = document.createElement("a");
a.setAttribute("href", "#");

// Sätter i img-taggen i a-taggen
a.appendChild(image);
// Sätter i a-taggen i div-taggen
div.appendChild(a);
// Sätter i div-taggen i de förskapade div-taggen
icon.appendChild(div);

a.onclick = function () {

// Efter du tryckt på ikonen så kommer det inte hända något gångerna efter
onclick++;
// Om click är större än 1 så kommer det inte hända något
if (onclick > 1)
{
return false;    
}

// Hämtar ut container
var container = document.getElementById("container");

// Skapar div-tagg för själva rutan
var windowDiv = document.createElement("div");
windowDiv.className = "window";

// Sätter i rutan i container
container.appendChild(windowDiv);

// Skapar div-tagg för huvudet på rutan samt sätter en klass på den
var headerDiv = document.createElement("div");
headerDiv.className = "headerDiv";

// Skapar en img-tagg och ger den ett utseende
var closeImage =  document.createElement("img");
closeImage.setAttribute("src", "pics/close.png");

// Skapar en a-tagg
var closeImageLink = document.createElement("a");
closeImageLink.setAttribute("href", "#");

// Skapar img och ger den ett utseende
var headerIcon = document.createElement("img");
headerIcon.className = "headerIcon";
headerIcon.setAttribute("src", "pics/iconimage.png");

// Lägger i allt i varandra
headerDiv.appendChild(headerIcon);
closeImageLink.appendChild(closeImage);
headerDiv.appendChild(closeImageLink);
windowDiv.appendChild(headerDiv);

// Skapar text-nod
var headerText = document.createTextNode("Picture Gallery");
headerDiv.appendChild(headerText);

// Skapar en div för nedre delen av rutan
var bottomDiv = document.createElement("div");
bottomDiv.className = "bottomDiv";

// Skapar div för innehållet
var contentDiv = document.createElement("div");
contentDiv.className = "contentDiv";

// Lägger i dom i rutan
windowDiv.appendChild(contentDiv);
windowDiv.appendChild(bottomDiv);

// Skapar en bild som kommer användas ifall anropet tar tid
var imageLoader = document.createElement("img");
imageLoader.setAttribute("src", "pics/load.gif");
// Lägger i den i den nedre delen av rutan
bottomDiv.appendChild(imageLoader);

closeImageLink.onclick = function () {
// Stänger ner fönstret
container.removeChild(windowDiv);
// Sätts om till 0 så det kommer gå klicka på ikonen
onclick = 0;
};

var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";

// Skapar en ny AjaxCon och skicka in url för bilderna och använder en funktion som callback
new AjaxCon(url, function(data) {

// Genom parse så tolkar jag datan och sparar in den i variabel
var jsonimgs = JSON.parse(data);
var node = document.getElementsByTagName("div");
var height = 0;
var width = 0;

// Skapa en divtagg för varje bild 
for (var i = 0; i < jsonimgs.length; i++) {
var ajaximgDiv = document.createElement("div");
ajaximgDiv.className = "ajaxImg";
contentDiv.appendChild(ajaximgDiv);

if (jsonimgs[i].thumbWidth > width) {
width = jsonimgs[i].thumbWidth;
}
if (jsonimgs[i].thumbHeight > height) {
height = jsonimgs[i].thumbHeight;
}
var ajaxImg = document.createElement("img");
ajaxImg.setAttribute("src", jsonimgs[i].thumbURL);

var ajaxImgLink = document.createElement("a");
ajaxImgLink.setAttribute("href", "#");
// Lägger sedan bild i div-taggen
ajaxImgLink.appendChild(ajaxImg);
ajaximgDiv.appendChild(ajaxImgLink);

// Gör så alla bilder och länkar som argument när man klickar för att byta bakgrundsbild
personalWebDesktop.changeBackground(jsonimgs[i].URL, ajaxImgLink);
}

// Kolla om div-taggen node är av klass ajaxImg vilket den är så sätt höjd och bredd
for (var j = 0; j < node.length; j++) {
if (node[j].className === "ajaxImg") {
node[j].style.height = height + "px";
node[j].style.width = width + "px";
}
}

// Efter ajax-anropet är klart så tas laddningsbilden bort
bottomDiv.removeChild(imageLoader);

});


return false;

};

},

changeBackground: function (backgroundImg, change) {
// Den bilden man klickas på byts till bakgrundsbilden
change.onclick = function () {
document.getElementById("container").style.backgroundImage = "url(" + backgroundImg + ")";
};

}
    
};

window.onload = personalWebDesktop.init;

