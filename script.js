/* 
Navigation bar
Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

fetch('assets/nav-bar/navbar.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

fetch('assets/icon-bar/icon-bar.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_iconbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})