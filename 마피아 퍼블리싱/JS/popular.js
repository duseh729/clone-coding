const popularEl = document.getElementById("popular");

// 0.3초마다 깜빡깜빡 거리게 구현.
setInterval(() => {
  if (popularEl.style.opacity == 0.5) {
    popularEl.style.opacity = 1;
  } else {
    popularEl.style.opacity = 0.5;
  }
}, 300);
