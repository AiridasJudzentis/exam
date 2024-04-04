document
  .getElementById("hamburger-icon")
  .addEventListener("click", function () {
    var mobileNavLinks = document.getElementById("mobile-nav-links");
    if (mobileNavLinks.style.display === "block") {
      mobileNavLinks.style.display = "none";
    } else {
      mobileNavLinks.style.display = "block";
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("hamburger-icon")
    .addEventListener("click", function () {
      var mobileNavLinks = document.getElementById("mobile-nav-links");
      mobileNavLinks.style.right = "0";
    });

  document.getElementById("close-btn").addEventListener("click", function () {
    var mobileNavLinks = document.getElementById("mobile-nav-links");
    mobileNavLinks.style.right = "-100%";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs .tab");
  const contentTitle = document.querySelector(".highlighted-content h2");
  const contentText = document.querySelector(".highlighted-content p");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((tab) => tab.classList.remove("active"));

      tab.classList.add("active");

      const tabContents = [
        {
          h2: "Tabs with soft transitioning effect. Explained propriety of out perpetual his you.",
          p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
        },
        {
          h2: "APPLY",
          p: "APPLY: Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.",
        },
        {
          h2: "RECEIVE",
          p: "RECEIVE: Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit.",
        },
      ];

      if (tabContents[index]) {
        contentTitle.textContent = tabContents[index].h2;
        contentText.textContent = tabContents[index].p;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;
    const phoneNumberInput = form.querySelector('input[type="tel"]');

    const previousSuccessMessage = document.querySelector(".success-message");
    if (previousSuccessMessage) {
      previousSuccessMessage.remove();
    }
    const errorMessages = form.querySelectorAll(".error-message");
    errorMessages.forEach((message) => message.remove());

    document
      .querySelectorAll(".contact-form input[required]")
      .forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          showError(input, "This field is required");
        } else {
          if (
            input.type === "tel" &&
            !validatePhoneNumber(input.value.trim())
          ) {
            isValid = false;
            showError(
              input,
              "Invalid phone number format. Must include '+' and numbers only."
            );
          }
        }
      });

    if (isValid) {
      showSuccess(form, "Form submitted successfully!");
    }
  });

  function validatePhoneNumber(number) {
    return /^\+[0-9]+$/.test(number);
  }

  function showError(input, message) {
    const error = document.createElement("div");
    error.textContent = message;
    error.className = "error-message";
    input.parentNode.insertBefore(error, input.nextSibling);
  }

  function showSuccess(form, message) {
    const successMessage = document.createElement("div");
    successMessage.textContent = message;
    successMessage.className = "success-message";
    form.appendChild(successMessage);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  let currentIndex = 0;

  function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarouselPosition();
  }

  function updateCarouselPosition() {
    const carousel = document.querySelector(".carousel");
    const currentSlide = slides[currentIndex];
    carousel.scrollLeft = currentSlide.offsetLeft - carousel.offsetLeft;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".content-cards img, .carousel-slide img")
    .forEach((image) => {
      image.addEventListener("click", () => {
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        lightbox.style.display = "block";
        lightboxImg.src = image.src;
        document.querySelector(".caption").textContent = image.alt;
      });
    });

  document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("lightbox").style.display = "none";
  });

  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target !== document.getElementById("lightbox-img")) {
      document.getElementById("lightbox").style.display = "none";
    }
  });
});
