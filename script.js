// === SLIDER ===
let slideIndex = 0;
const slides = document.querySelectorAll(".banner img");
const dots = document.querySelectorAll(".dots span");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      slideIndex = idx;
      showSlide(slideIndex);
    });
  });
}

const autoSlide = setInterval(nextSlide, 10000);

// === POPUP PRODUK ===
const viewButtons = document.querySelectorAll(".view-detail");
const popup = document.getElementById("popup");

viewButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("popup-title").textContent = button.dataset.title;
    document.getElementById("popup-desc").textContent = button.dataset.desc;
    document.getElementById("popup-img1").src = button.dataset.img1;
    document.getElementById("popup-img2").src = button.dataset.img2;
    document.getElementById("popup-img3").src = button.dataset.img3;
    popup.classList.add("active");
  });
});

function closePopup() {
  popup.classList.remove("active");
}

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
  }
});

