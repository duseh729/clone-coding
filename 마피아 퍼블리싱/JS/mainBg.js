const mainBgItems = document.querySelectorAll(".main-bg-menu-item");
const mainBG = document.querySelector(".main-bg");
const mainBgColor = ["gray", "yellow", "pink", "aqua", "burlywood"];

// 4초마다 반복적으로 실행.
let interval = setInterval(itemsInterval, 4000);

mainBgItems.forEach((el) => {
  el.addEventListener("click", itemsEvent);
});

function itemsEvent(e) {
  let activeDiv = document.getElementsByClassName("active");
  activeDiv[0].classList.remove("active");
  e.target.classList.add("active");
  mainBG.style.backgroundColor = `${mainBgColor[e.target.id - 1]}`;
  // 클릭시 setInterval 시간 초기화 되도록 구현
  clearInterval(interval);
  interval = setInterval(itemsInterval, 4000);
}

// 반복적으로 실행할 함수.
function itemsInterval() {
  // .main-bg-menu-item 클래스 객체(div)들을 가져온다.
  let activeDiv = document.querySelectorAll(".main-bg-menu-item");
  // 가져온 객체(div)들의 개수로 반복 시작.
  for (let i = 0; i < activeDiv.length; i++) {
    // 2. 마지막 순서의 객체(div)라면
    // 처음 순서의 객체(div)로 active를 다시 시작.
    if (i === activeDiv.length - 1) {
      activeDiv[i].classList.remove("active");
      activeDiv[0].classList.add("active");
      mainBG.style.backgroundColor = `${mainBgColor[0]}`;
      break;
      // 1. 가져온 객체의 하나에 접근해서,
      // 클래스 개수가 2개인 경우 (active가 포함되어 있는지 확인을 위한 조건문)
      // 현재 객체(div)의 active는 삭제하고 다음 순서의 객체(div)에 active추가.
      // 그리고 반복문을 끝낸다.
    } else if (activeDiv[i].classList.length === 2) {
      activeDiv[i].classList.remove("active");
      activeDiv[i + 1].classList.add("active");
      mainBG.style.backgroundColor = `${mainBgColor[i + 1]}`;
      break;
    }
  }
}
