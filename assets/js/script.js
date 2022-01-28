//https://www.w3schools.com/js/js_array_sort.asp

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
    }
    else {
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