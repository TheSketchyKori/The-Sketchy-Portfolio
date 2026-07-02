// ==========================================
// STORYBOARD GALLERY
// ==========================================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const galleryInfo = document.getElementById("gallery-info");

let galleryTitle = "";

let currentGallery = [];
let currentIndex = 0;

function showImage() {

    lightboxImg.src = currentGallery[currentIndex].src;

    galleryInfo.textContent =
        `${String(currentIndex + 1).padStart(2, "0")} / ${String(currentGallery.length).padStart(2, "0")} • ${galleryTitle}`;

}

function nextImage() {

    currentIndex++;

    if (currentIndex >= currentGallery.length) {

        currentIndex = 0;

    }

    showImage();

}

function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = currentGallery.length - 1;

    }

    showImage();

}

// Find every gallery

document.querySelectorAll(".panel-grid").forEach(grid => {

    const images = [...grid.querySelectorAll("img")];

    images.forEach((img, index) => {

        img.addEventListener("click", () => {

            currentGallery = images;
            currentIndex = index;
            galleryTitle = grid.dataset.gallery;

            showImage();

           if (lightbox) {
            
           } lightbox.classList.add("show");

        });

    });

});

// Close

// Close

if (lightbox) {

    lightbox.addEventListener("click", e => {

        if (e.target === lightbox) {

            lightbox.classList.remove("show");

        }

    });

}

// Keyboard

document.addEventListener("keydown", e => {

    if (!lightbox.classList.contains("show")) return;

    if (e.key === "ArrowRight") nextImage();

    if (e.key === "ArrowLeft") previousImage();

    if (e.key === "Escape")
        lightbox.classList.remove("show");

});

// Buttons

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

if (leftArrow) {

    leftArrow.addEventListener("click", e => {

        e.stopPropagation();

        previousImage();

    });

}

if (rightArrow) {

    rightArrow.addEventListener("click", e => {

        e.stopPropagation();

        nextImage();

    });

}

// ==========================================
// HERO IMAGE SUPPORT
// ==========================================

document.querySelectorAll(".hero-image").forEach(hero => {

    hero.addEventListener("click", () => {

        const gallery =
            hero.parentElement.querySelector(".panel-grid img");

        if (gallery) {

            gallery.click();

        }

    });

});

const toggleButton = document.getElementById("togglePanels");
const extraPanels = document.getElementById("extraPanels");

if (toggleButton && extraPanels) {

    toggleButton.addEventListener("click", () => {

        extraPanels.classList.toggle("show");

        if (extraPanels.classList.contains("show")) {

            toggleButton.textContent = "▲ Show Less";

        } else {

            toggleButton.textContent = "▼ View All 56 Panels";

        }

    });

}

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(menuButton){

menuButton.addEventListener("click",()=>{

nav.classList.toggle("show");

});

}