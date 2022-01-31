//https://www.w3schools.com/js/js_array_sort.asp

//  ****** //
//  ****** //
//  ****** //
//  *** lump *** //

const lamp = document.querySelector('.lamp');
let mood = "day";
let nextmood = "night";

if (document.getElementsByClassName(mood).length === 0) {
    mood = "night";
    nextmood = "day";
}

lamp.addEventListener("mouseover", mIn);
lamp.addEventListener("click", mBtn);
lamp.addEventListener("mouseout", mOut);

function mIn() {
    const allitem = document.getElementsByClassName(mood);

    for (let i = allitem.length - 1; i >= 0; i--) {
        allitem[i].classList.add(nextmood);
        allitem[i].classList.remove(mood);
    }
}

function mBtn() {
    if (mood === "day") {
        mood = "night";
        nextmood = "day";
    } else {
        mood = "day";
        nextmood = "night";
    }
}

function mOut() {
    const allitem = document.getElementsByClassName(nextmood);

    for (let i = allitem.length - 1; i >= 0; i--) {
        allitem[i].classList.add(mood);
        allitem[i].classList.remove(nextmood);
    }
}


//  ****** //
//  ****** //
//  ****** //
//  *** menu icon *** //


const menubtn = document.querySelector('.menubox');

menubtn.addEventListener("click", xMenu);

function xMenu() {
    console.log(menubtn);

    const menuIcons = document.querySelector('.menu-items');

    if (menuIcons.classList.contains("aMenu")) {
        menuIcons.classList.add("xMenu");
        menuIcons.classList.remove("aMenu");
        menubtn.classList.remove("menuclose");
        menubtn.classList.add("menuopen");

    } else {
        menuIcons.classList.add("aMenu");
        menuIcons.classList.remove("xMenu");
        menubtn.classList.add("menuclose");
        menubtn.classList.remove("menuopen");
    }

}

//  ****** //
//  ****** //
//  ****** //
//  *** progress bar *** //
let indexnumber = 0;
const pages = document.getElementsByTagName("article");
const menuicons = document.getElementsByClassName("menui");

window.onscroll = function () {
    pagepos()
};

function pagepos() {
    indexnumber = 0;
    for (let i = 0; i < menuicons.length; i++) {

        if (pages[i].getBoundingClientRect().top <= window.innerHeight / 2) {
            indexnumber = i;
        }
    }
    for (let i = 0; i < menuicons.length; i++) {
        if (i != indexnumber) {
            if (menuicons[i].classList.contains("isactive")) {
                menuicons[i].classList.remove("isactive");
            }
            if (!menuicons[i].children[0].classList.contains("notactive")) {
                menuicons[i].children[0].classList.add("notactive");
            }
        }
    }
    menuicons[indexnumber].classList.add("isactive");
    menuicons[indexnumber].children[0].classList.remove("notactive");

}



//  ****** //
//  ****** //
//  ****** //
//  *** smooth scroll *** //
document.querySelector(".onvan").addEventListener("click", function () {
    toElement(pages[0])
});
document.querySelector(".godl").addEventListener("click", function () {
    toElement(pages[3])
});

for (let i = 0; i < menuicons.length; i++) {
    menuicons[i].addEventListener("click", function () {
        toElement(pages[i])
    });
}

function toElement(elem) {
    elem.scrollIntoView({
        behavior: 'smooth'
    });
}


//  ****** //
//  ****** //
//  ****** //
//  *** electric effect *** //

const elc = document.getElementsByClassName("elcshow");

for (let i = 0; i < elc.length; i++) {

    function setRandomAnimationDuration() {
        if (indexnumber === 4) {
            elc[i].style.setProperty('--animation-time', Math.floor(Math.random() * 10 + 1) + "s");
        }
    }

    elc[i].addEventListener("animationiteration", setRandomAnimationDuration);

}

/*

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

*/