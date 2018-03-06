"use strict";


// var player = document.querySelector(".player");
// var stopButton = document.querySelector(".button");
// var body = document.querySelector("body");

// document.addEventListener("click", function movePlayer(event) {
//     var x = event.clientX;
//     var y = event.clientY;
//     player.style.top = y - (player.height / 2) + "px";
//     player.style.left = x - (player.width / 2) + "px";
// });

// document.addEventListener("click", movePlayer)
// button.addEventListener("click", removeButton)
// function movePlayer(event) {
//     var x = event.clientX;
//     var y = event.clientY;
//     player.style.top = y - (player.height / 2) + "px";
//     player.style.left = x - (player.width / 2) + "px";
// }


var $player = $(".player")
var $stopButton = $(".button")
var $body = $("body")

$body.on("click", function (e) {
    console.log($player.offset())
    var currentPosition = {
        x: e.clientX - ($player.width() / 2),
        y: e.clientY - ($player.height() / 2)
    }

    $player.animate({
        top: currentPosition.y,
        left: currentPosition.x
    })
})

$stopButton.on("click", function () {
    $body.off("click");
})