"use strict";

var PersonalWebDesktop = {

init: function () {

var icon = document.getElementById("icon");
var div = document.createElement("div");
div.className = "icon";

var image = document.createElement("img");
image.setAttribute("src", "http://icons.iconarchive.com/icons/iconshock/cms/128/gallery-icon.png");
image.className = "iconImage";

var a = document.createElement("a");
a.setAttribute("href", "#");

a.appendChild(image);
div.appendChild(a);
icon.appendChild(div);

a.onclick = function () {


var main = document.getElementById("main");

var div = document.createElement("div");
div.className = "window";


};
    
}
    
};

window.onload = PersonalWebDesktop.init;

