/*
Jeff Chapin
https://jachapin.github.io
2019
*/

/* Fade in the description */
$('#description').hide().fadeIn(1500);

/* On mouse hover, change color of list items */
$('li').hover(changeColor, removeColor);

function changeColor() {
    $(this).addClass('secondColor');
}

function removeColor() {
    $(this).removeClass('secondColor');
}

let webLI = document.querySelector("#web");
webLI.addEventListener("click", function(e) {
    let audio = document.querySelector("#boom");
    if(!audio) {
        return;
    } else {
        audio.play();
        $(this).addClass('hover');
    }
})


