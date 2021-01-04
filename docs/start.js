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
link1.style = "width:70px;height:50px;padding:0";
topbar.appendChild(link1);
var navList = [["Home","index.html"],["Operators","operators.html"],["Routes","routes.html"],["Fleet","fleet.html"]];
navList.forEach(function(item,index){
    var link = document.createElement("a");
    link.classList.add("navbutton");
    link.href = item[1];
    link.innerHTML = item[0];
    topbar.appendChild(link);
    if (link.href === window.location.href){link.classList.add("currentPage")}
})
// Footer
var footer = document.getElementById("footer");
var img1 = document.createElement("img");img1.id = "footerimg1";
var img2 = document.createElement("img");img2.id = "footerimg2";
footer.appendChild(img1);img1.src = "https://www.hkbrda.org/infolink/output/news-big.gif";
footer.appendChild(img2);img2.src = "https://www.coronavirus.gov.hk/images/fight-virus-1000x250.png";
var p1 = document.createElement("p");footer.appendChild(p1);p1.style = "position:absolute;padding:0;left:20px;width:300px"
p1.innerHTML = 'Transport Simulator 2021<br>All rights reserved<br><span style="color:grey;font-size:12px">Last updated on 25 Nov 2020</span>'

var content = document.getElementById("content");
function posfooter(){var num = window.innerHeight - 310 + "px";content.style.minHeight = num}
window.addEventListener("resize",posfooter())
posfooter()
