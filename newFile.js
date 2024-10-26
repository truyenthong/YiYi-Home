const { rightbtn, index, imgnumber } = require("./script");

rightbtn.addEventListener(`click`, function () {
  index = index + 1;
  if (index > imgnumber.length - 1) {
    index = 0;
  }
  document.querySelector(`.slide`).computedStyleMap.right = index * 100 + "%";
});
