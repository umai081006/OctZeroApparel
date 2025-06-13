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

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    slideIndex = idx;
    showSlide(slideIndex);
  });
});

const autoSlide = setInterval(nextSlide, 10000); // Slide tiap 10 detik

// === POPUP PRODUK ===
const buttons = document.querySelectorAll(".product-card button");
const popup = document.getElementById("productPopup");
const popupImg = popup.querySelector("img");
const popupTitle = popup.querySelector("h2");
const popupDesc = popup.querySelector("p");
const closeBtn = popup.querySelector(".close-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    popupImg.src = card.querySelector("img").src;
    popupTitle.innerText = card.querySelector("h2").innerText;
    popupDesc.innerText = card.querySelector("p").innerText;
    popup.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
  }
});

// === ENHANCEMENT ===
// Pause auto slide ketika popup aktif
const observer = new MutationObserver(() => {
  if (popup.classList.contains("active")) {
    clearInterval(autoSlide);
  }
});

observer.observe(popup, { attributes: true, attributeFilter: ["class"] });

