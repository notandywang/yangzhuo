const image = document.getElementById("mainImage");

let state = "firstframe";
let clickEnabled = true;

const gifs = ["gif1.gif", "gif2.gif", "gif3.gif", "gif_letter.gif"];

const transitions = {
  "gif1.gif": ["assets/gif1_read.png", "assets/gif1_text.png"],
  "gif2.gif": ["assets/gif2_read.png", "assets/gif2_text.png"],
  "gif3.gif": ["assets/gif3_read.png", "assets/gif3_text.png"],
  "gif_letter.gif": ["assets/readframe.png", "assets/readtext.png"],
};

let currentGif = "";

image.addEventListener("click", () => {
  if (!clickEnabled) return;

  if (state === "firstframe") {
    const selected = gifs[Math.floor(Math.random() * gifs.length)];
    currentGif = selected;
    image.src = "assets/gifs/" + selected;
    state = "gif";

    if (selected === "gif_letter.gif") {
      clickEnabled = false;
      setTimeout(() => {
        image.src = transitions[selected][0]; // readframe.png
        state = "read";
        clickEnabled = true;
      }, 1500); // let the gif play before transitioning
    } else {
      clickEnabled = false;
      setTimeout(() => clickEnabled = true, 1000); // prevent skipping too early
    }

  } else if (state === "gif") {
    // For gif1, gif2, gif3: manually click to transition
    const [readImage] = transitions[currentGif];
    image.src = readImage;
    state = "read";

  } else if (state === "read") {
    image.src = transitions[currentGif][1]; // textImage
    state = "text";

  } else if (state === "text") {
    image.src = "assets/firstframe.png";
    state = "firstframe";
  }
});
