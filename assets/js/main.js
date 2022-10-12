const slidesEl = document.querySelector("div.slides");

const slideList = [
    "./assets/img/01.webp",
    "./assets/img/02.webp",
    "./assets/img/03.webp",
    "./assets/img/04.webp",
    "./assets/img/05.webp"
]

// active image
slidesEl.insertAdjacentHTML("beforeend", `<img src="${slideList[0]}" alt="" class="active">`);
// not active images
for (let i = 1; i < slideList.length; i++) {
    const slideMarkup = `<img src="${slideList[i]}" alt="">`
    slidesEl.insertAdjacentHTML("beforeend", slideMarkup);
}
