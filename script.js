const btnEl = document.querySelector(".switch-btn");
const videoEl = document.querySelector(".video-container");

btnEl.addEventListener("click", () => {
  if (!btnEl.classList.contains("slide")) {
    btnEl.classList.add("slide");
    videoEl.pause();
  } else {
    btnEl.classList.remove("slide");
    videoEl.play();
  }
});

// load : 모든 페이지(스타일시트, 스크립트, 아이프레임 등 모든 리소스)가 모두 로드 되었을 때 발생
// DOMContentLoaded : 페이지에서 돔만 로드가 되면 발생
// 둘의 차이는 ?

// 모든 요소가 로드되면 hide-preloader 클래스를 preloaderEL에 추가한다.
const preloaderEl = document.querySelector(".preloader");
window.addEventListener("load", () => {
  preloaderEl.classList.add("hide-preloader");
});