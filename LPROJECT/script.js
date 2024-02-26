document.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.querySelector(".yes-btn");
  const noButton = document.querySelector(".no-btn");

  noButton.addEventListener("click", function (event) {
    yesButton.style.width = "100px";
    yesButton.style.height = "100px";

    console.log("button pressed");
  });

  // Changing gif and fixing gif size
  yesButton.addEventListener("click", function () {
    const gifImage = document.getElementById("gif");
    gifImage.src = "GIFS/second-gif.gif";
    gifImage.width = 200;
    gifImage.height = 200;
  });
});
