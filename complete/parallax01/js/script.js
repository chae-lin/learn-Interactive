let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.03;
let scrollTop = 0;
let progressBar;
let parallaxImages;
let parallax_6;
let _documentHnum;
let _windowHnum;

window.onload = function () {
  parallaxImages = document.querySelectorAll(".parallax_image");
  parallax_6 = document.querySelector("#parallax_6");
  progressBar = document.querySelector(".progressBar");

  window.addEventListener("resize", stageResize, false);
  window.addEventListener("mousemove", mouseMove, false);
  window.addEventListener("scroll", scrollFunc, false);

  stageResize();
  loop();
};

function scrollFunc(e) {
  scrollTop = document.documentElement.scrollTop;
  let percent = Math.ceil((scrollTop / (_documentHnum - _windowHnum)) * 100);

  progressBar.style.width = percent + "%";

  parallaxImages[0].style.transform = `translateY(${scrollTop * 0.03}px)`;
  parallaxImages[1].style.transform = `translateY(${-scrollTop * 0.03}px)`;
  parallaxImages[2].style.transform = `translateY(${-scrollTop * 0.12}px)`;
  parallaxImages[3].style.transform = `translateY(${-scrollTop * 0.16}px)`;

  // entries(): 배열 의 각 인덱스에 대한 키/값 쌍을 포함 entries()하는 새 Array Iterator 객체를 반환
  // for (let [index, parallaxImage] of parallaxImages.entries()) {
  //   console.log(index, parallaxImage);
  // }
}

function stageResize() {
  _documentHnum = document.body.offsetHeight;
  _windowHnum = window.innerHeight;
}

function loop() {
  mx += (x - mx) * speed;
  my += (y - my) * speed;

  parallaxImages[4].style.transform = `translate(${mx / 100}px, ${
    -scrollTop * 0.22
  }px)`;
  parallaxImages[5].style.transform = `scale(1.1) translate(${mx / 50}px, ${
    -scrollTop * 0.25
  }px)`;
  parallax_6.style.transform = `scale(1.2) translate(${-mx / 20}px, ${
    -my / 20
  }px)`;

  window.requestAnimationFrame(loop);
}

function mouseMove(e) {
  x = e.clientX - window.innerWidth / 2;
  y = e.clientY - window.innerHeight / 2;
}
