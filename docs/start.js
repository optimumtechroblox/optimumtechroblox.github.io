// Directed to mobile site
if (window.innerWidth <= 600){window.location.href = "m" + window.location.pathname}
// Website icon
var icon = "Logo.svg"
var link = document.createElement("link");link.rel = "shortcut icon";document.head.appendChild(link);link.href = icon;
var font = document.createElement("link");font.rel = "stylesheet";document.head.appendChild(font);font.href = "https://fonts.googleapis.com/css?family=Rubik";
var style = document.createElement("link");style.rel = "stylesheet";document.head.appendChild(style);style.href = "style.css";
// Top navbar
var topbar = document.createElement("div");
topbar.id = "navbar";
document.body.appendChild(topbar);
var link1 = document.createElement("a");
link1.classList = "navbutton";
link1.href = "index.html";
var link1img = document.createElement("img");
link1img.id = "navicon";
link1img.src = icon;
link1.appendChild(link1img);
link1.style = "width:60px;height:50px;padding:0";
topbar.appendChild(link1);
var navList = [["Home","home.html"],["About Us","about.html"],["Projects","projects.html"],["Products","products.html"]];
navList.forEach(function(item){
    var link = document.createElement("a");
    link.classList.add("navbutton");
    link.href = item[1];
    link.innerHTML = item[0];
    topbar.appendChild(link);
    if (link.href === window.location.href){link.classList.add("currentPage")}
    else if (item[0] == "Home" && window.location.pathname == "/"){link.classList.add("currentPage")}
})
// Footer
var footer = document.getElementById("footer");
var img1 = document.createElement("img");img1.id = "footerimg1";
footer.appendChild(img1);img1.src = "https://www.hkbrda.org/infolink/output/news-big.gif";
var p1 = document.createElement("p");footer.appendChild(p1);p1.style = "position:absolute;padding:0;left:20px;width:300px"
p1.innerHTML = 'Optimum Tech Roblox 2021<br>All rights reserved<br><span style="color:grey;font-size:12px">Last updated on 15 Jan 2021</span>'

var content = document.getElementById("content");
function posfooter(){var num = window.innerHeight - 310 + "px";content.style.minHeight = num}
window.addEventListener("resize",posfooter())
posfooter()
