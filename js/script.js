// count down feature
function startCounter() {
  $('.counter').each(function () {
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

observer.observe(document.querySelector('#stats'));

// typewriter effect
const text = "Workflow.";
const speed = 120;     // typing speed
const delay = 1200;    // pause after full word
let index = 0;

function typeWriter() {
  const el = document.getElementById("typewriter");

  if (index < text.length) {
    el.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      el.textContent = "";
      index = 0;
      typeWriter();
    }, delay);
  }
}

typeWriter();


// swiper for testimonial section
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 50,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  keyboard: {
    enabled: true,
  },
  a11y: {
    prevSlideMessage: 'Previous review',
    nextSlideMessage: 'Next review',
  },

  breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      },
  }
});

// mobile navbar
const hamburger = document.getElementById("hamburger"); 
const mobileDrawer = document.getElementById("mobileDrawer"); 
const mobileClose = document.getElementById("mobileClose"); 
const overlayHeader = document.getElementById("overlayHeader"); 

const mobilePageNav = document.getElementById("mobilePageNav"); 
const mobilePageNavMenu = document.getElementById("mobilePageNavMenu");

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
})

// preloader
window.addEventListener("load", () => {
  
  setTimeout(() => {
    document.getElementById("preloader").style.opacity = "0";
    document.getElementById("preloader").style.transition = "opacity 0.7s ease";
    document.getElementById("stickyHeader").style.display = "block";
      setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
      }, 700);
  }, 3000);
});

// navbar + back to top button
document.addEventListener("DOMContentLoaded", () => {

  const scrollUpBtn = document.querySelector(".scroll_up");

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

