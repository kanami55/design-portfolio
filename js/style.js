// topへ戻るボタン動作
const page_top = document.querySelector("#page-top")
page_top.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
