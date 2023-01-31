const mainBgItems = document.querySelectorAll(".main-bg-menu-item");
const mainBG = document.querySelector(".main-bg");
const mainBgColor = ["gray", "yellow", "pink", "aqua", "burlywood"];

mainBgItems.forEach((el) => {
  el.addEventListener("click", itemsEvent);
});

function itemsEvent(e) {
  let activeDiv = document.getElementsByClassName("active");
  activeDiv[0].classList.remove("active");
  e.target.classList.add("active");
  mainBG.style.backgroundColor = `${mainBgColor[e.target.id - 1]}`;
}
