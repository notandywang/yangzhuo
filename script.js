const image = document.getElementById("mainImage");
let state = "firstframe";

const gifs = ["gif1.gif", "gif2.gif", "gif3.gif", "gif4.gif", "gif_letter.gif"];
const getRandomGif = () => gifs[Math.floor(Math.random() * gifs.length)];

image.addEventListener("click", () => {
  if (state === "firstframe") {
    const selected = getRandomGif();
    image.src = "assets/gifs/" + selected;
    image.dataset.current = selected;
    state = "gif";
  } else if (state === "gif") {
    if (image.dataset.current === "gif_letter.gif") {
      image.src = "assets/image_letter.png";
      state = "letter";
    } else {
      image.src = "assets/firstframe.png";
      state = "firstframe";
    }
  } else if (state === "letter") {
    image.src = "assets/firstframe.png";
    state = "firstframe";
  }
});
