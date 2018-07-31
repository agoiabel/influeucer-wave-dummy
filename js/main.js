// JS prototype just to mske things work, use the Vue js version for yours
document.addEventListener("DOMContentLoaded", function() {
  // Js for user menu
  let userMenu = document.getElementById("user-menu");
  let userBtn = document.getElementById("user-btn");

  // Toggles user menu
  userBtn.addEventListener("click", function() {
    userMenu.classList.toggle("show");
  });

  // JS for mobile catgeories filter
  let filterBtn = document.getElementById("filter-btn");
  let mobileCategories = document.getElementById("mobile-categories");
  let closeFilterBtn = document.getElementById("close-filter");

  // displays categories filter on mobile
  filterBtn.addEventListener("click", function() {
    mobileCategories.style.display = "block";
  });

  // closes categories filter on mobile
  closeFilterBtn.addEventListener("click", function() {
    mobileCategories.style.display = "none";
  });

  // Modal JS

  let earnButtons = document.querySelectorAll(".earn-btn");
  let modal = document.getElementById("modal");
  let nextBtn = document.querySelector(".next-btn");
  let closeModalButtons = document.querySelectorAll(".close-modal");

  earnButtons.forEach(function(earnBtn) {
    earnBtn.addEventListener("click", function() {
      modal.classList.add("visible");
    });
  });
  
  closeModalButtons.forEach(function(closeModalBtn) {
    closeModalBtn.addEventListener("click", function() {
      modal.classList.remove("visible");
      document.getElementById("share-options").classList.add("visible");
      document.getElementById("edit-content").classList.remove("visible");
    });
  });
  nextBtn.addEventListener("click", function() {
    document.getElementById("share-options").classList.toggle("visible");
    document.getElementById("edit-content").classList.toggle("visible");
  });
});
