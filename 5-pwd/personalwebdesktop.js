"use strict";

var personalWebDesktop = {

init: function () {

var icon = document.getElementById("icon");
var div = document.createElement("div");
div.className = "icon";

var image = document.createElement("img");
image.setAttribute("src", "pics/iconImage.png");
image.className = "iconImage";

var a = document.createElement("a");
a.setAttribute("href", "#");

a.appendChild(image);
div.appendChild(a);
icon.appendChild(div);

a.onclick = function () {


var container = document.getElementById("container");

var windowDiv = document.createElement("div");
windowDiv.className = "window";

container.appendChild(windowDiv);

var headerDiv = document.createElement("div");
headerDiv.className = "headerDiv";

var closeImage =  document.createElement("img");
closeImage.setAttribute("src", "pics/close.png");

var closeImageLink = document.createElement("a");
closeImageLink.setAttribute("href", "#");

var headerIcon = document.createElement("img");
headerIcon.className = "headerIcon";
headerIcon.setAttribute("src", "pics/iconImage.png");

headerDiv.appendChild(headerIcon);
closeImageLink.appendChild(closeImage);
headerDiv.appendChild(closeImageLink);
windowDiv.appendChild(headerDiv);

var headerText = document.createTextNode("Picture Gallery");
headerDiv.appendChild(headerText);

var bottomDiv = document.createElement("div");
bottomDiv.className = "bottomDiv";

var contentDiv = document.createElement("div");
contentDiv.className = "contentDiv";

closeImageLink.onclick = function () {
container.removeChild(windowDiv);    
};


};
    
}
    
};

window.onload = personalWebDesktop.init;

