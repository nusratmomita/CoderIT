// for banner slider
var swiperBanner = new Swiper(".hero_banner_slider", {
  loop: true,
  pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
});

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