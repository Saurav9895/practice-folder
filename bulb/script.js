function changeImage() {
  const image = document.getElementById("image-bulb");
  const button = document.getElementById("txt-button");

  if (button.textContent == "Turn on") {
    image.src = "bulb-on.jpg";
    button.textContent = "Turn off";
  } else {
    image.src = "bulb-off.jpg";
    button.textContent = "Turn on";
  }
}
