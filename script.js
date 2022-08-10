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

fetch('adrigalle.github.io/assets/nav-bar/navbar.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

/* footer stuff, basically same as above */
function myFooterFunction() {
  var x = document.getElementById("myfooter");
  if (x.className === "footer") {
    x.className += " responsive";
  } else {
    x.className = "footer";
  }
}

fetch('adrigalle.github.io/assets/footer/footer.html')
.then(res => res.text())
.then(text => {
  let oldelem = document.querySelector("script#replace_with_footer");
  let newelem = document.createElement("div");
  newelem.innerHTML = text;
  oldelem.parentNode.replaceChild(newelem,oldelem);
})
