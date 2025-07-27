const image = document.getElementById("mainImage");

let state = "firstframe";
let clickDisabled = false;

image.addEventListener("click", () => {
  if (clickDisabled) return;

  if (state === "firstframe") {
    image.src = "assets/gifs/gif_letter.gif";
    state = "gif";
    clickDisabled = true;
    setTimeout(() => {
      clickDisabled = false;
    }, 8000); // Disable clicks for 8 seconds
  } else if (state === "gif") {
    image.src = "assets/readtext.png";
    state = "text";
  } else if (state === "text") {
    image.src = "assets/firstframe.png";
    state = "firstframe";
  }
});