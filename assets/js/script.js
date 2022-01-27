//https://www.w3schools.com/js/js_array_sort.asp

const lamp = document.querySelector('.lamp');
let mood = "day";
let nextmood = "night";


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

