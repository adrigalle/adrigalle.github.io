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

/* footer stuff, basically same as above */
function myFooterFunction() {
  var x = document.getElementById("myfooter");
  if (x.className === "footer") {
    x.className += " responsive";
  } else {
    x.className = "footer";
  }
}

fetch('assets/footer/footer.html')
.then(res => res.text())
.then(text => {
  let oldelem = document.querySelector("script#replace_with_footer");
  let newelem = document.createElement("div");
  newelem.innerHTML = text;
  oldelem.parentNode.replaceChild(newelem,oldelem);
})

/* text animation for header in hero */
document.addEventListener("DOMContentLoaded", function () {
  let letter = 0;
  const text = "I'm a web developer.";
  function typeText() {
    if (letter < text.length) {
      document.getElementById("type-js").innerHTML += text.charAt(letter);
      letter++;
      let speed = Math.floor(Math.random() * 150) + 50;
      setTimeout(typeText, speed);
    }
  }
  typeText();
});
/* from https://w3collective.com/animated-typing-text-effect/ */
