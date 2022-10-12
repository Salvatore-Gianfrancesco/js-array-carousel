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

const nextSlide = document.querySelector("button:first-of-type")
    .addEventListener("click", function () {
        console.log("prev");
        let currentSlide = document.querySelector(".active");
        currentSlide.classList.remove("active");
        activeSlide--;
        currentSlide = document.querySelector(`img:nth-child(${activeSlide})`);
        currentSlide.classList.add("active");
    })

const prevSlide = document.querySelector("button:last-of-type")
    .addEventListener("click", function () {
        console.log("next");
        let currentSlide = document.querySelector(".active");
        currentSlide.classList.remove("active");
        activeSlide++;
        currentSlide = document.querySelector(`img:nth-child(${activeSlide})`);
        currentSlide.classList.add("active");
    })