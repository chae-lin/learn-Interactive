let scrollTop = 0;
let imageAll;
let totalNum = 0;

window.onload = function () {
  progressBar = document.querySelector(".progressBar");
  imageAll = document.querySelectorAll(".parallax_image");
  totalNum = imageAll.length;

  window.addEventListener("resize", stageResize, false);
  window.addEventListener("scroll", scrollFunc);

  stageResize();
};

function scrollFunc(e) {
  scrollTop = this.scrollY;

  let per = Math.ceil((scrollTop / (_documentHum - _windowHNum)) * 100);
  progressBar.style.width = per + "%";

  // perspective: 입체감의 깊이 (숫자가 작을 수록 크게 움직인다.)
  // translateZ(x:좌. y:우, z:깊이)
  for (var i = 0; i < totalNum; i++) {
    imageAll[i].style.transform =
      "perspective(400px) translateZ(" +
      scrollTop / (5 * (totalNum - i)) +
      "px)";
    // imageAll[i].style.transform = "perspective(400px) translateZ("+ scrollTop/5 +"px)";
    console.log(i, scrollTop / (5 * (totalNum - i)));
  }
}

function stageResize() {
  _documentHum = document.body.offsetHeight;
  _windowHNum = window.innerHeight;
}
