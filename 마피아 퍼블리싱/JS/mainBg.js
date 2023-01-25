const mainBgItems = document.querySelectorAll(".main-bg-menu-item");
console.log(mainBgItems);

mainBgItems.forEach((el) => {
  el.addEventListener("click", itemsEvent);
});

function itemsEvent(e) {
  console.log(e.target);
}

mainBgItems[0].addEventListener("click", itemsEvent);
