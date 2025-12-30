// preloader
window.addEventListener("load", () => {
  
  setTimeout(() => {
    document.getElementById("about_preloader").style.opacity = "0";
    document.getElementById("about_preloader").style.transition = "opacity 0.7s ease";
    document.getElementById("about_stickyHeader").style.display = "block";
      setTimeout(() => {
        document.getElementById("about_preloader").style.display = "none";
      }, 700);
  }, 3000);
});

// navbar + back to top button
document.addEventListener("DOMContentLoaded", () => {

  const scrollUpBtn = document.querySelector(".about_scroll_up");

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
const hamburger = document.getElementById("about_hamburger"); 
const mobileDrawer = document.getElementById("about_mobileDrawer"); 
const mobileClose = document.getElementById("about_mobileClose"); 
const overlayHeader = document.getElementById("about_overlayHeader"); 

const mobilePageNav = document.getElementById("about_mobilePageNav"); 
const mobilePageNavMenu = document.getElementById("about_mobilePageNavMenu");

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

// count down feature
function startCounter() {
  $('.about_counter').each(function () {
    const $this = $(this);
    const target = +$this.data('target');

    $({ countNum: 0 }).animate(
      { countNum: target },
      {
          duration: 2000,
          easing: 'swing',
          step: function () {
              $this.text(Math.floor(this.countNum) + '+');
          },
          complete: function () {
              $this.text(target + '+');
          }
      }
    );
  });
}

// appear count down when screen comes in
let counterStarted = false;

const observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting && !counterStarted) {
        startCounter();
        counterStarted = true;
        observer.disconnect(); // run only once
    }
  },
  { threshold: 0.4 } // 40% visible
);

observer.observe(document.querySelector('#about_stats'));