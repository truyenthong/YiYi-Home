const mainImage = document.getElementById("product-big-img");

const images = document.querySelectorAll("img");

images.forEach((image) => {
  if (image !== mainImage) {
    image.addEventListener("click", () => {
      mainImage.src = image.src;
      images.forEach((image) => image.classList.remove("active"));
      image.classList.add("active");
    });
  }
});
// ========sp=======
const spImg = document.querySelectorAll(".size img");
const colorImgs = document.querySelectorAll(" .colorImg");

colorImgs.forEach((colorImg) => {
  colorImg.addEventListener("click", () => {
    colorImgs.forEach((colorImg) => colorImg.classList.remove("imgActive"));
    colorImg.classList.add("imgActive");
  });
});
