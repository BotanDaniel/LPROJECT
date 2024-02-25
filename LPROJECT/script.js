"use strict";

//pressing yes script
document.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.querySelector(".yes-btn");
  const gifImage = document.getElementById("gif");
  //changing gif and fixing gif size
  yesButton.addEventListener("click", function () {
    gifImage.src = "GIFS/second-gif.gif";
    gifImage.width = 200;
    gifImager.height = 200;
  });
});
//pressing no script
