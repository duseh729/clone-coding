const artistEvent = document.getElementById("third-contents-btn");
const artistList = document.querySelectorAll(".hidden");

artistEvent.addEventListener("click", () => {
  if (artistEvent.childNodes[0].innerHTML === "인기 아티스트 접기") {
    artistEvent.childNodes[0].innerHTML = "인기 아티스트 더보기";
    artistList.forEach((a) => {
      a.classList.add("hidden");
    });
  } else {
    artistEvent.childNodes[0].innerHTML = "인기 아티스트 접기";
    artistList.forEach((a) => {
      a.classList.remove("hidden");
    });
  }
});
