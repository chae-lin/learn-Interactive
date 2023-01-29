let buttons;
let cursorItem;
let circle;
let x = 0,
  y = 0;
let mx = 0,
  my = 0;

window.onload = function () {
  buttons = document.querySelectorAll(".button");
  cursorItem = document.querySelector(".cursorItem");
  circle = cursorItem.querySelector(".circle");

  for (const button of buttons) {
    button.addEventListener("mouseover", function () {
      circle.style.transform = "scale(.3)";
    });
    button.addEventListener("mouseout", function () {
      circle.style.transform = "scale(i)";
    });
  }

  window.addEventListener("mousemove", function (e) {
    x = e.clientX;
    y = e.clientY;
    //cursorItem.style.transform = "translate("+ x +"px, "+ y + "px )";
  });

  loop();
};

function loop() {
  mx += (x - mx) * 0.09;
  my += (y - my) * 0.09;
  cursorItem.style.transform = "translate(" + mx + "px, " + my + "px )";

  requestAnimationFrame(loop);
}
