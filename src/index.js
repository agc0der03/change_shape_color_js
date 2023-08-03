import "./styles.css";

var btn1 = document.getElementById("change-color");
var btn2 = document.getElementById("change-shape");
var parent = document.getElementById("app");
var original_color = parent.style.backgroundColor;
var child = document.getElementById("child");
btn1.addEventListener("click", function () {
  if (parent.style.backgroundColor == original_color) {
    parent.style.backgroundColor = "green";
  } else {
    parent.style.backgroundColor = original_color;
  }
});

btn2.addEventListener("click", function () {
  child.style.height = "0px";
  child.style.width = "0px";
  child.style.borderBottom = "50px solid white";
  child.style.borderLeft = "50px solid transparent";
  child.style.borderRight = "50px solid transparent";
});
