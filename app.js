const number = document.querySelector(".number");
const img = document.querySelector(".background_img");

let load = 0;
let int = setInterval(loading, 30);

function loading() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }
  number.innerText = `${load}%`;
  number.style.opacity = b(load, 0, 100, 1, 0);
  img.style.filter = `blur(${b(load, 0, 100, 30, 0)}px)`;
}

const b = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
