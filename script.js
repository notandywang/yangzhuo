const image = document.getElementById("mainImage");

let state = "firstframe";

image.addEventListener("click", () => {
  if (state === "firstframe") {
    image.src = "assets/gifs/gif_letter.gif";
    state = "gif";
  } else if (state === "gif") {
    image.src = "assets/readtext.png";
    state = "text";
  } else if (state === "text") {
    image.src = "assets/firstframe.png";
    state = "firstframe";
  }
});
