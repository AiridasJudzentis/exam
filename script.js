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
  // Toggle menu display on hamburger icon click
  document
    .getElementById("hamburger-icon")
    .addEventListener("click", function () {
      var mobileNavLinks = document.getElementById("mobile-nav-links");
      mobileNavLinks.style.right = "0"; // Show the menu
    });

  // Hide menu on close button click
  document.getElementById("close-btn").addEventListener("click", function () {
    var mobileNavLinks = document.getElementById("mobile-nav-links");
    mobileNavLinks.style.right = "-100%"; // Hide the menu
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs .tab");
  const contentTitle = document.querySelector(".highlighted-content h2");
  const contentText = document.querySelector(".highlighted-content p");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Reset active class on tabs
      tabs.forEach((tab) => tab.classList.remove("active"));

      // Set clicked tab as active
      tab.classList.add("active");

      // Define content for each tab
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

      // Update content based on clicked tab
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
    let isValid = true;
    // Check each input in the form
    document
      .querySelectorAll(".contact-form input[required]")
      .forEach((input) => {
        if (!input.value.trim()) {
          // Check if the input is empty
          isValid = false;
          // Optionally, insert an error message after the input
          if (
            !input.nextElementSibling ||
            !input.nextElementSibling.classList.contains("error-message")
          ) {
            const error = document.createElement("div");
            error.textContent = "This field is required";
            error.className = "error-message";
            input.parentNode.insertBefore(error, input.nextSibling);
          }
        } else {
          // If the input is not empty, remove any existing error message
          if (
            input.nextElementSibling &&
            input.nextElementSibling.classList.contains("error-message")
          ) {
            input.nextElementSibling.remove();
          }
        }
      });

    if (!isValid) {
      event.preventDefault(); // Prevent form submission
    }
  });
});
