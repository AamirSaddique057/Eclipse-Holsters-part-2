document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.best-seller-wrapper', {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    loop: true,
      navigation: {
        nextEl: "#btnNext",
        prevEl: "#btnPrev"
      },
      breakpoints: {
      // when window width is >= 76px
      320: {
        slidesPerView: 1.17,
        spaceBetween: 8
      },
      // when window width is >= 76px
      480: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      // when window width is >= 76px
      768: {
        slidesPerView: 3,
        spaceBetween: 8
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 14
      },
      // when window width is >= 1440px
      1024: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.garage-sale-wrapper', {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    loop: true,
    navigation: {
      nextEl: "#garagebtnNext",
      prevEl: "#garagebtnPrev"
    },
    breakpoints: {
      // when window width is >= 76px
      320: {
        slidesPerView: 1.3,
        spaceBetween: 8
      },
      // when window width is >= 76px
      480: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      // when window width is >= 76px
      768: {
        slidesPerView: 3,
        spaceBetween: 8
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 14
      },
      // when window width is >= 1440px
      1024: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });
});
// Universal Rifle Slider
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.universal-refle-wrapper', {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    loop: true,
    navigation: {
      nextEl: "#univeralbtnNext",
      prevEl: "#univeralbtnPrev"
    }
  });
});
// Holstar University Slider
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.holstar-wrapper', {
    slidesPerView: 2.5,
    spaceBetween: 22,
    freeMode: true,
    loop: true,
    navigation: {
      nextEl: "#holstarbtnNext",
      prevEl: "#holstarbtnPrev"
    },
        breakpoints: {
      // when window width is >= 76px
      320: {
        slidesPerView: 1,
        spaceBetween: 8
      },
      // when window width is >= 76px
      480: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 2.5,
        spaceBetween: 14
      },
      // when window width is >= 1440px
      1440: {
        slidesPerView: 2.5,
        spaceBetween: 22
      }
    }
  });
});
