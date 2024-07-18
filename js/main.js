/* Menu Active Codes */

let targets = document.querySelectorAll("[data-target]");
targets.forEach((element) => {
  element.addEventListener("click", () => {
    var target = document.querySelector(element.dataset.target);
    targets.forEach((element2) => {
      var target2 = document.querySelector(element2.dataset.target);
      element2.style.color = "var(--menu_text_color)";
      target2.style.display = "none";
    });
    element.style.color = "var(--menu_active_text_color)";
    target.style.display = "flex";
  });
});

/* Pagination for Resume Section */

// Add event listeners to navigation items
document.querySelectorAll("#navi ul li a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    // Get the target page
    const targetId = this.getAttribute("href");
    // Hide all pages
    document.querySelectorAll(".resume-section .page").forEach((page) => {
      page.style.display = "none";
    });
    // Show the target page
    document.querySelector(targetId).style.display = "block";
  });
});

// Initially show the first page and hide others
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".resume-section .page").forEach((page, index) => {
    if (index === 0) {
      page.style.display = "block";
    } else {
      page.style.display = "none";
    }
  });
});
