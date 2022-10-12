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

let activeSlide = 0;
let currentSlide = document.querySelector(".active");
let currentThumb = document.querySelector(".active_thumb");

const nextSlide = document.querySelector("button:first-of-type")
    .addEventListener("click", function () {
        // console.log("prev");
        if (activeSlide === 0) {
            activeSlide = slideList.length - 1;
        } else {
            activeSlide--;
        }
        currentSlide.classList.remove("active");
        currentSlide = document.querySelector(`.slides img:nth-child(${activeSlide + 1})`);
        currentSlide.classList.add("active");

        currentThumb.classList.remove("active_thumb");
        currentThumb = document.querySelector(`.thumbs img:nth-child(${activeSlide + 1})`);
        currentThumb.classList.add("active_thumb");
    })

const prevSlide = document.querySelector("button:last-of-type")
    .addEventListener("click", function () {
        // console.log("next");
        if (activeSlide === slideList.length - 1) {
            activeSlide = 0;
        } else {
            activeSlide++;
        }
        currentSlide.classList.remove("active");
        currentSlide = document.querySelector(`img:nth-child(${activeSlide + 1})`);
        currentSlide.classList.add("active");

        currentThumb.classList.remove("active_thumb");
        currentThumb = document.querySelector(`.thumbs img:nth-child(${activeSlide + 1})`);
        currentThumb.classList.add("active_thumb");
    })