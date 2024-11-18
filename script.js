const rightBtn = document.querySelector(".fa-chevron-right");
const leftBtn = document.querySelector(".fa-chevron-left");
const imgNumber = document.querySelectorAll(".slider-child img");

let index = 0;

rightBtn.addEventListener("click", function () {
  index += 1;
  if (index > imgNumber.length - 1) {
    index = 0;
  }
  document.querySelector(".slider-child").style.right = index * 100 + "%";
});

leftBtn.addEventListener("click", function () {
  index -= 1;
  if (index < 0) {
    index = imgNumber.length - 1;
  }
  document.querySelector(".slider-child").style.right = index * 100 + "%";
});

function imgAuto() {
  index += 1;
  if (index > imgNumber.length - 1) {
    index = 0;
  }
  document.querySelector(".slider-child").style.right = index * 100 + "%";
}
setInterval(imgAuto, 5000);
// san pham copy
document.querySelectorAll(".dropdown a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
