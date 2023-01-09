// topへ戻るボタン動作
const page_top = document.querySelector("#page-top")
page_top.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//Daily UIのスライド動作
const options = {
  mediaQuery: "min", 
  fixedWidth: "24rem",
  heightRatio: 0.3,
  gap: 16,
  type: "loop",
  arrows: false,
  drag: "free", 
  flickPower: 100,
  pagination: false,

  autoScroll: {
    speed: 0.5, 
    pauseOnHover: false,
    pauseOnFocus: true,
  },
  breakpoints: {
    1025: {
      gap: 24,
      fixedWidth: "36rem",
    },
  },
};

const splide = new Splide(".splide", options);

splide.mount(window.splide.Extensions);