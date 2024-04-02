let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

document
  .getElementById("hamburger-icon")
  .addEventListener("click", function () {
    var navLinks = document.querySelector(".nav-links");
    if (navLinks.style.right === "0px") {
      navLinks.style.right = "-100%"; // Hide
    } else {
      navLinks.style.right = "0"; // Show
    }
  });
