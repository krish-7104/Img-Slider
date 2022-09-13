let flag = 0;

const Controller = (x) => {
  flag = flag + x;
  sliderHandler(flag);
};
const sliderHandler = (num) => {
  let slides = document.getElementsByClassName("slide");
  if (num == slides.length) {
    flag = 0;
    num = 0;
  }
  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }
  for (let s of slides) {
    s.style.display = "none";
  }
  slides[num].style.display = "block";
};

sliderHandler(flag);
