// preloader
window.addEventListener("load", () => {
  
  setTimeout(() => {
    document.getElementById("blog_preloader").style.opacity = "0";
    document.getElementById("blog_preloader").style.transition = "opacity 0.7s ease";
    document.getElementById("blog_stickyHeader").style.display = "block";
      setTimeout(() => {
        document.getElementById("blog_preloader").style.display = "none";
      }, 700);
  }, 3000);
});

// navbar + back to top button
document.addEventListener("DOMContentLoaded", () => {

  const scrollUpBtn = document.querySelector(".blog_scroll_up");

  scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  window.addEventListener("scroll", () => {
    

    if (window.scrollY > 0) {
      scrollUpBtn.classList.remove("hidden");
    } 
    else {
      scrollUpBtn.classList.add("hidden");
    }
  });

});

// mobile navbar
const hamburger = document.getElementById("blog_hamburger"); 
const mobileDrawer = document.getElementById("blog_mobileDrawer"); 
const mobileClose = document.getElementById("blog_mobileClose"); 
const overlayHeader = document.getElementById("blog_overlayHeader"); 

const mobilePageNav = document.getElementById("blog_mobilePageNav"); 
const mobilePageNavMenu = document.getElementById("blog_mobilePageNavMenu");

// Open drawer
hamburger.addEventListener("click", () => {
    mobileDrawer.classList.remove("-translate-x-full");
    overlayHeader.classList.remove("hidden");
});

// Close drawer (X button)
mobileClose.addEventListener("click", () => {
    mobileDrawer.classList.add("-translate-x-full");
    overlayHeader.classList.add("hidden");
});

// Close drawer (overlay click)
overlayHeader.addEventListener("click", () => {
    mobileDrawer.classList.add("-translate-x-full");
    overlayHeader.classList.add("hidden");
});

mobilePageNav.addEventListener("click", function() {
    mobilePageNavMenu.classList.toggle("hidden");
});