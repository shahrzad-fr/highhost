// /////////
//1- slider tab-pills-spesh-buy

var swiper = new Swiper(".mySwiper-spesh", {
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      // centeredSlides: true,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      // centeredSlides: true,
      //   initialSlid: 1,
      //   loop: true,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
      loop: true,
      // centeredSlides: true,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      // centeredSlides: true,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      // centeredSlides: true,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      // centeredSlides: true,
    },
    1600: {
      slidesPerView: 5,
      spaceBetween: 10,
      loop: true,
      // centeredSlides: true,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//2- slider tab-pills-virtual-buy

var swiper = new Swiper(".mySwiper-virtual", {
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      // centeredSlides: true,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      // centeredSlides: true,
      //   initialSlid: 1,
      //   loop: true,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
      loop: true,
      // centeredSlides: true,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 10,
      // loop: true,
      // centeredSlides: true,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 25,
      loop: true,
      // centeredSlides: true,
    },
    1600: {
      slidesPerView: 5,
      spaceBetween: 25,
      loop: true,
      // centeredSlides: true,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//3-rejister-domain
var swiper = new Swiper(".mySwiper-rejister-domain", {
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
    },
    450: {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
    },
    576: {
      slidesPerView: 5,
      spaceBetween: 20,
      loop: true,
    },

    768: {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 10,
      loop: true,
    },
    1400: {
      slidesPerView: 7,
      spaceBetween: 10,
      // loop: true,
      // centeredSlides: true,
    },
    1800: {
      slidesPerView: 7,
      spaceBetween: 50,
      // loop: true,
      // centeredSlides: true,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
