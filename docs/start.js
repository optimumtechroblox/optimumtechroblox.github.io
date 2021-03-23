// Website icon
var host = window.location.hostname
if (host.lastIndexOf("/") != host.length - 1){host = "https://" + host + "/"}
if (window.location.protocol == "file:"){host = "file:///C:/Users/wangh/Documents/GitHub/optimumtechroblox.github.io/docs/"}
var icon = host + "logo.svg"
var link = document.createElement("link");link.rel = "shortcut icon";document.head.appendChild(link);link.href = icon;
var font = document.createElement("link");font.rel = "stylesheet";document.head.appendChild(font);font.href = "https://fonts.googleapis.com/css?family=Rubik";
var style = document.createElement("link");style.rel = "stylesheet";document.head.appendChild(style);style.href = host + "style.css";
var meta = document.createElement("meta");meta.name = "viewport";document.head.appendChild(meta);meta.content = "width=device-width, initial-scale=1.0";
// Top navbar
var topbar = document.createElement("div");
topbar.id = "navbar";
document.body.appendChild(topbar);
var link1 = document.createElement("a");
link1.classList = "navbutton";
link1.href = host;
var link1img = document.createElement("img");
link1img.id = "navicon";
link1img.src = icon;
link1.appendChild(link1img);
link1.style = "width:60px;height:50px;padding:0;float:left";
topbar.appendChild(link1);
var navList = [["Home","","left"],["About Us","about.html","left"],["Products","products.html","left"],["Contact us","contact.html","left"],["License","license/","right"]];
navList.forEach(function(item){
    var link = document.createElement("a");
    link.classList.add("navbutton");
    link.href = host + item[1]
    link.innerHTML = item[0];
    link.style.float = item[2];
    topbar.appendChild(link);
    if (link.href === window.location.href){link.classList.add("currentPage")}
    else if (item[0] == "Home" && window.location.href == host + "index.html"){link.classList.add("currentPage")}
    else if (item[0] == "License" && window.location.href == host + "license/index.html"){link.classList.add("currentPage")}
})
// Footer
var footer = document.createElement("div");document.body.appendChild(footer);footer.id = "footer";
var img1 = document.createElement("img");img1.id = "footerimg1";
footer.appendChild(img1);img1.src = "https://www.hkbrda.org/infolink/output/news-big.gif";
var p1 = document.createElement("p");footer.appendChild(p1);p1.style = "position:absolute;padding:0;left:20px;width:300px"
p1.innerHTML = 'Optimum Tech Roblox 2021<br>All rights reserved<br><span style="color:grey;font-size:12px">Last updated on 23 Mar 2021</span>'

var content = document.getElementById("content");
function posfooter(){var num = window.innerHeight - 310 + "px";content.style.minHeight = num}
window.addEventListener("resize",posfooter())
posfooter()
//console.log("%c STOP!!","font-size:50px;color:red;font-weight:700")
//console.log("If you are trying to paste code from somewhere else, we are 200% sure that you have been tricked.\nPlease close the window now.")
// https://discord.com/assets/35d75407bd75d70e84e945c9f879bab8.svg
// https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg