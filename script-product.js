// ====================san pham===========
const classImg = document.querySelectorAll(
  ".product-content-left-mall-img img"
);
const idImg1 = document.getElementById("product-img-1");
const idImg2 = document.getElementById("product-img-2");
const idImg3 = document.getElementById("product-img-3");
const idImg4 = document.getElementById("product-img-4");
const idImg5 = document.getElementById("product-img-5");
const idImg6 = document.getElementById("product-img-6");
const idImgBig = document.querySelector(".product-big-img");

const spImg = document.getElementById("product-img-1");

idImg1.addEventListener("click", () => {
  idImgBig.src = "./img/kem-nhung/kem-nhung.webp";
});

idImg2.addEventListener("click", () => {
  idImgBig.src = "./img/kem-nhung/chat-luong-kem.webp";
});

idImg3.addEventListener("click", () => {
  idImgBig.src = "./img/kem-nhung/thanh-pham-1.webp";
});

idImg4.addEventListener("click", () => {
  idImgBig.src = "./img/kem-nhung/thanh-pham-2.webp";
});

idImg5.addEventListener("click", () => {
  idImgBig.src = "./img/kem-nhung/thanh-pham-3.webp";
});

idImg6.addEventListener("click", () => {
  idImgBig.src = "./img/kem-nhung/loi-cam-on.webp";
});
