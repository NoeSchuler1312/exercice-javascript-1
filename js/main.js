// box 1
var changeColor = document.querySelector(".change-color");
var newColor = function () {
  changeColor.classList.add("is-active");
};

changeColor.addEventListener("click", newColor);

// box 2
var toggleColor = document.querySelector(".toggle-color");
var newColor = function () {
  toggleColor.classList.toggle("is-active");
};

toggleColor.addEventListener("click", newColor);

//box 2 et 3
var trigger = document.querySelector(".trigger");
var target = document.querySelector(".target");
var vanish = function () {
  trigger.classList.toggle("is-active");
  target.classList.toggle("is-invisible");
};

trigger.addEventListener("click", vanish);

//box 4
var triggerAll = document.querySelector(".trigger-all");
var newColor = function () {
  changeColor.classList.add("is-active");
  toggleColor.classList.add("is-active");
};

triggerAll.addEventListener("click", newColor);

//box 5
var triggerAllSelf = document.querySelector(".trigger-all-self");
var newColor = function () {
  changeColor.classList.add("is-active");
  toggleColor.classList.add("is-active");
  triggerAllSelf.classList.add("is-active");
};

triggerAllSelf.addEventListener("click", newColor);
