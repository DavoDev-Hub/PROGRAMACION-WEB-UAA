let image = document.querySelector("img");
let button = document.querySelector("button");
let title = document.querySelector("h1");
let body = document.querySelector("body");
let boolean = "";

button.addEventListener("click", function () {
  if (boolean === true) {
    image.src = "img/luna-def.png";
    title.textContent = "Dark Mode";
    body.style.backgroundColor = "white";
    title.style.color = "black";
    button.style.backgroundColor = "black";
    button.style.color = "white";
    boolean = false;
  } else {
    image.src = "img/sol-def.png";
    title.textContent = "Light Mode";
    body.style.backgroundColor = "black";
    title.style.color = "white";
    button.style.backgroundColor = "white";
    button.style.color = "black";
    boolean = true;
  }
});