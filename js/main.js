const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slider = document.getElementById("slider");

let currentIndex = 0;

const updateButtons = () => {
  const items = document.querySelectorAll(".item");
  prev.disabled = currentIndex === 0;
  next.disabled = currentIndex === items.length - 1;
};

next.addEventListener("click", () => {
  const items = document.querySelectorAll(".item");
  slider.appendChild(items[0]);
  currentIndex = (currentIndex + 1) % items.length;
  updateButtons();
});

prev.addEventListener("click", () => {
  const items = document.querySelectorAll(".item");
  slider.prepend(items[items.length - 1]);
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateButtons();
});

updateButtons();
