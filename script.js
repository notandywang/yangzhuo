const image = document.getElementById("mainImage");

let state = "firstframe";
let clickEnabled = true;

image.addEventListener("click", () => {
  if (!clickEnabled) return;

  if (state === "firstframe") {
    image.src = "assets/gifs/gif_letter.gif";
    state = "gif";
    clickEnabled = false;
    setTimeout(() => clickEnabled = true, 8000); // Ignore clicks for 8 seconds
  } else if (state === "gif") {
    image.src = "assets/readtext.png";
    state = "text";
  } else if (state === "text") {
    image.src = "assets/firstframe.png";
    state = "firstframe";
  }
});
