
// topへ戻るボタン動作
const page_top = document.querySelector("#page-top")
page_top.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ハンバーグメニュー開閉時
document.querySelector('.hamburger-bar').addEventListener('click', function() {
  this.classList.toggle('action');
  document.querySelector('.hamburger-nav-items').classList.toggle('action-content')
})

//Daily UIのスライド動作
const options = {
  mediaQuery: "max", 
  fixedWidth: "300px",
  fixedHeight: "250px",
  heightRatio: 0.3,
  gap: 16,
  type: "loop",
  arrows: false,
  drag: "free", 
  flickPower: 100,
  pagination: false,

  autoScroll: {
    speed: 0.8, 
    pauseOnHover: false,
    pauseOnFocus: true,
  },
  breakpoints: {
    1025: {
      mediaQuery: "min", 
      // gap: 24,
      // fixedWidth: "300px",
    },
  },
};

const splide = new Splide(".splide", options);

splide.mount(window.splide.Extensions);