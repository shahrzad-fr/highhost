/////1-submenu-mobile-active
var acc = document.getElementsByClassName("accordion-menumo");
// دکمه همراه با  -/+
var i;
var activeItem;
// var activcolor;
/// اون ارایه ای که توش منفی هست رو محاسبه میکنه
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    $(".active-faq-mo").css("fill", "black");

    var plus = $(this).find(".active-faq-mo");
    // ///  پیدا کردن مثبت یا منفی
    if ($(this).find(".active-faq-mo").attr("data-key") != activeItem) {
      $(plus).css("fill", "#007bff");

      activeItem = $(this).find(".active-faq-mo").attr("data-key");
    } else {
      activeItem = null;
    }
  });
}
//2-slider-blog
var swiper = new Swiper(".mySwiper-blog", {
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      //   initialSlid: 1,
      //   loop: true,
      //   centeredSlides: true,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      // centeredSlides: true,
      // slidesPerView: 3,
      // spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      // centeredSlides: true,
      // slidesPerView: 3,
      // spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      // centeredSlides: true,
      // slidesPerView: 5,
      // spaceBetween: 20,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      // centeredSlides: true,
    },
    2000: {
      slidesPerView: 3,
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
// 4-transtion animation section
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((item) => {
    const windowHeight = window.innerHeight;
    const elementTop = item.getBoundingClientRect().top;
    const elementVisible = 80;

    if (elementTop < windowHeight - elementVisible) {
      item.classList.add("active");
    }
  });
}
addEventListener("scroll", reveal);
addEventListener("load", reveal);
// 5-assist
var swiper = new Swiper(".mySwiper-assist", {
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 25,
      loop: true,
      // centeredSlides: true,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 25,
      loop: true,
      // centeredSlides: true,
      //   initialSlid: 1,
      //   loop: true,
    },
    450: {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      // centeredSlides: true,
      //   initialSlid: 1,
      //   loop: true,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      // centeredSlides: true,
    },

    768: {
      slidesPerView: 4,
      spaceBetween: 25,
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
      slidesPerView: 6,
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
// 6-comment
var swiper = new Swiper(".mySwiper-comment", {
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 60,
      loop: true,
      centeredSlides: true,
      loop: true,

      //   initialSlid: 1,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 25,
      loop: true,
      centeredSlides: true,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      // centeredSlides: true,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      // centeredSlides: true,
    },
    1400: {
      slidesPerView: 3,
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
// ////////////7-megameno
// menu-1
function myFunctionSub1() {
  var dots1 = document.getElementById("dots1");
  var seeText1 = document.getElementById("see1");
  var btnText1 = document.getElementById("myBtn1");
  var Menu1 = document.getElementById("menu-1");
  var Menu2 = document.getElementById("menu-2");
  var Menu3 = document.getElementById("menu-3");
  var Menu4 = document.getElementById("menu-4");
  var Menu5 = document.getElementById("menu-5");
  var Menu6 = document.getElementById("menu-6");
  var Menu7 = document.getElementById("menu-7");

  if (dots1.style.display === "none") {
    dots1.style.display = "flex";
    btnText1.innerHTML = `<div
    class="d-flex flex-row align-items-center justify-content-between"
  >
    <p class="my-0 fw-bold fs-6">سرور مجازی</p>

    <img src="img/sub-open.svg" alt="" />
  </div>`;

    Menu2.style.display = "flex";
    Menu3.style.display = "flex";
    Menu4.style.display = "flex";
    Menu5.style.display = "flex";
    Menu6.style.display = "flex";
    Menu7.style.display = "flex";

    btnText1.style.marginTop = "0rem";
    seeText1.style.display = "none";
    seeText1.style.marginTop = "0rem";
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = `<div class="d-flex flex-row align-items-center">
    <img src="img/sub-close.svg" alt="" />
    <div class="dabel">
      <p class="fw-light my-0">بازگشت</p>
      <p class="my-0 fw-bold fs-6">سرور مجازی</p>
    </div>
  </div>`;
    Menu2.style.display = "none";
    Menu3.style.display = "none";
    Menu4.style.display = "none";
    Menu5.style.display = "none";
    Menu6.style.display = "none";
    Menu7.style.display = "none";

    btnText1.style.marginTop = "0rem";
    seeText1.style.display = "flex";
  }
}
// menu-2
function myFunctionSub2() {
  var dots2 = document.getElementById("dots2");
  var seeText2 = document.getElementById("see2");
  var btnText2 = document.getElementById("myBtn2");
  var Menu1 = document.getElementById("menu-1");
  var Menu2 = document.getElementById("menu-2");
  var Menu3 = document.getElementById("menu-3");
  var Menu4 = document.getElementById("menu-4");
  var Menu5 = document.getElementById("menu-5");
  var Menu6 = document.getElementById("menu-6");
  var Menu7 = document.getElementById("menu-7");

  if (dots2.style.display === "none") {
    dots2.style.display = "flex";
    btnText2.innerHTML = `<div
    class="d-flex flex-row align-items-center justify-content-between"
  >
    <p class="my-0 fw-bold fs-6">سرور اختصاصی</p>

    <img src="img/sub-open.svg" alt="" />
  </div>`;
    Menu1.style.display = "flex";
    Menu3.style.display = "flex";
    Menu4.style.display = "flex";
    Menu5.style.display = "flex";
    Menu6.style.display = "flex";
    Menu7.style.display = "flex";

    btnText2.style.marginTop = "0rem";
    seeText2.style.display = "none";
    seeText2.style.marginTop = "0rem";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = `<div class="d-flex flex-row align-items-center">
    <img src="img/sub-close.svg" alt="" />
    <div class="dabel">
      <p class="fw-light my-0">بازگشت</p>
      <p class="my-0 fw-bold fs-6">سرور اختصاصی</p>
    </div>
  </div>`;
    Menu1.style.display = "none";
    Menu3.style.display = "none";
    Menu4.style.display = "none";
    Menu5.style.display = "none";
    Menu6.style.display = "none";
    Menu7.style.display = "none";

    btnText2.style.marginTop = "0rem";
    seeText2.style.display = "flex";
  }
}
// menu-3
function myFunctionSub3() {
  var dots3 = document.getElementById("dots3");
  var seeText3 = document.getElementById("see3");
  var btnText3 = document.getElementById("myBtn3");
  var Menu1 = document.getElementById("menu-1");
  var Menu2 = document.getElementById("menu-2");
  var Menu3 = document.getElementById("menu-3");
  var Menu4 = document.getElementById("menu-4");
  var Menu5 = document.getElementById("menu-5");
  var Menu6 = document.getElementById("menu-6");
  var Menu7 = document.getElementById("menu-7");

  if (dots3.style.display === "none") {
    dots3.style.display = "flex";
    btnText3.innerHTML = `<div
    class="d-flex flex-row align-items-center justify-content-between"
  >
    <p class="my-0 fw-bold fs-6">میزبانی</p>

    <img src="img/sub-open.svg" alt="" />
  </div>`;
    Menu2.style.display = "flex";
    Menu1.style.display = "flex";
    Menu4.style.display = "flex";
    Menu5.style.display = "flex";
    Menu6.style.display = "flex";
    Menu7.style.display = "flex";

    btnText3.style.marginTop = "0rem";
    seeText3.style.display = "none";
    seeText3.style.marginTop = "0rem";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = `<div class="d-flex flex-row align-items-center">
    <img src="img/sub-close.svg" alt="" />
    <div class="dabel">
      <p class="fw-light my-0">بازگشت</p>
      <p class="my-0 fw-bold fs-6">میزبانی</p>
    </div>
  </div>`;
    Menu2.style.display = "none";
    Menu1.style.display = "none";
    Menu4.style.display = "none";
    Menu5.style.display = "none";
    Menu6.style.display = "none";
    Menu7.style.display = "none";

    btnText3.style.marginTop = "0rem";
    seeText3.style.display = "flex";
  }
}
// menu-4
function myFunctionSub4() {
  var dots4 = document.getElementById("dots4");
  var seeText4 = document.getElementById("see4");
  var btnText4 = document.getElementById("myBtn4");
  var Menu1 = document.getElementById("menu-1");
  var Menu2 = document.getElementById("menu-2");
  var Menu3 = document.getElementById("menu-3");
  var Menu4 = document.getElementById("menu-4");
  var Menu5 = document.getElementById("menu-5");
  var Menu6 = document.getElementById("menu-6");
  var Menu7 = document.getElementById("menu-7");

  if (dots4.style.display === "none") {
    dots4.style.display = "flex";
    btnText4.innerHTML = ` <div
    class="d-flex flex-row align-items-center justify-content-between"
  >
    <p class="my-0 fw-bold fs-6 color-sky-06">دامنه</p>
    <img src="img/sub-open.svg" alt="" />
  </div>`;
    Menu2.style.display = "flex";
    Menu3.style.display = "flex";
    Menu1.style.display = "flex";
    Menu5.style.display = "flex";
    Menu6.style.display = "flex";
    Menu7.style.display = "flex";

    btnText4.style.marginTop = "0rem";
    seeText4.style.display = "none";
    seeText4.style.marginTop = "0rem";
  } else {
    dots4.style.display = "none";
    btnText4.innerHTML = `<div class="d-flex flex-row align-items-center">
    <img src="img/sub-close.svg" alt="" />
    <div class="dabel">
      <p class="fw-light my-0">بازگشت</p>
      <p class="my-0 fw-bold fs-6 color-sky-06">دامنه</p>
      </div>
  </div>`;
    Menu2.style.display = "none";
    Menu3.style.display = "none";
    Menu1.style.display = "none";
    Menu5.style.display = "none";
    Menu6.style.display = "none";
    Menu7.style.display = "none";

    btnText4.style.marginTop = "0rem";
    seeText4.style.display = "flex";
  }
}
// menu-5
function myFunctionSub5() {
  var dots5 = document.getElementById("dots5");
  var seeText5 = document.getElementById("see5");
  var btnText5 = document.getElementById("myBtn5");
  var Menu1 = document.getElementById("menu-1");
  var Menu2 = document.getElementById("menu-2");
  var Menu3 = document.getElementById("menu-3");
  var Menu4 = document.getElementById("menu-4");
  var Menu5 = document.getElementById("menu-5");
  var Menu6 = document.getElementById("menu-6");
  var Menu7 = document.getElementById("menu-7");

  if (dots5.style.display === "none") {
    dots5.style.display = "flex";
    btnText5.innerHTML = `<div
    class="d-flex flex-row align-items-center justify-content-between"
  >
    <div class="d-flex flex-row live gap-2 align-items-center">
      <p class="my-0 fw-bold fs-6">وضعیت سرورها</p>
      <p class="my-0 color-sky-06 border rounded-3 px-2 py-0">
        زنده
      </p>
    </div>

    <img src="img/sub-open.svg" alt="" />
  </div>`;
    Menu2.style.display = "flex";
    Menu3.style.display = "flex";
    Menu4.style.display = "flex";
    Menu1.style.display = "flex";
    Menu6.style.display = "flex";
    Menu7.style.display = "flex";
    btnText5.style.marginTop = "0rem";
    seeText5.style.display = "none";
    seeText5.style.marginTop = "0rem";
  } else {
    dots5.style.display = "none";
    btnText5.innerHTML = `<div class="d-flex flex-row align-items-center">
    <img src="img/sub-close.svg" alt="" />
    <div class="dabel">
      <p class="fw-light my-0">بازگشت</p>
      <div
                  class="d-flex flex-row align-items-center justify-content-between"
                >
                  <div class="d-flex flex-row live gap-2 align-items-center">
                    <p class="my-0 fw-bold fs-6">وضعیت سرورها</p>
                    <p class="my-0 color-sky-06 border rounded-3 px-2 py-0">
                      زنده
                    </p>
                  </div>

                  
                </div>
    </div>
  </div>`;
    Menu2.style.display = "none";
    Menu3.style.display = "none";
    Menu4.style.display = "none";
    Menu1.style.display = "none";
    Menu6.style.display = "none";
    Menu7.style.display = "none";

    btnText5.style.marginTop = "0rem";
    seeText5.style.display = "flex";
  }
}
// menu-6
function myFunctionSub6() {
  var dots6 = document.getElementById("dots6");
  var seeText6 = document.getElementById("see6");
  var btnText6 = document.getElementById("myBtn6");
  var Menu1 = document.getElementById("menu-1");
  var Menu2 = document.getElementById("menu-2");
  var Menu3 = document.getElementById("menu-3");
  var Menu4 = document.getElementById("menu-4");
  var Menu5 = document.getElementById("menu-5");
  var Menu6 = document.getElementById("menu-6");
  var Menu7 = document.getElementById("menu-7");

  if (dots6.style.display === "none") {
    dots6.style.display = "flex";
    btnText6.innerHTML = `<div
    class="d-flex flex-row align-items-center justify-content-between"
  >
    <p class="my-0 fw-bold fs-6">ارتباط با ما</p>

    <img src="img/sub-open.svg" alt="" />
  </div>`;
    Menu2.style.display = "flex";
    Menu3.style.display = "flex";
    Menu4.style.display = "flex";
    Menu5.style.display = "flex";
    Menu1.style.display = "flex";
    Menu7.style.display = "flex";

    btnText6.style.marginTop = "0rem";
    seeText6.style.display = "none";
    seeText6.style.marginTop = "0rem";
  } else {
    dots6.style.display = "none";
    btnText6.innerHTML = `<div class="d-flex flex-row align-items-center">
    <img src="img/sub-close.svg" alt="" />
    <div class="dabel">
      <p class="fw-light my-0">بازگشت</p>
      <p class="my-0 fw-bold fs-6">ارتباط با ما</p>
    </div>
  </div>`;
    Menu2.style.display = "none";
    Menu3.style.display = "none";
    Menu4.style.display = "none";
    Menu5.style.display = "none";
    Menu1.style.display = "none";
    Menu7.style.display = "none";

    btnText6.style.marginTop = "0rem";
    seeText6.style.display = "flex";
  }
}
///////////////////////////6-faq accordion
var acc = document.getElementsByClassName("accordion");
// دکمه همراه با  -/+
var i;
var activeItem;
console.log(acc[2]);
// var activcolor;
/// اون ارایه ای که توش منفی هست رو محاسبه میکنه
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    $(".panel").slideUp(0);
    ///  میبنده
    // $(".active-faq").html = '<img src="img/faqup.svg" alt="" />';
    $(".active-faq").attr("src", "img/faqup.svg");
    // $(acc).addClass("faq-jQ-bg-befor");
    $(acc).css("background", "none");
    $(acc).css("border", "none");

    // $(acc).css("box-shadow", "0px 1px 20px 8px rgb(125 126 131 / 8%)");
    // مثبتش میکنه
    var panell = this.nextElementSibling;
    // // پاسخ
    var plus = $(this).find(".active-faq");
    // ///  پیدا کردن مثبت یا منفی
    if ($(this).find(".active-faq").attr("data-key") != activeItem) {
      // دیتا کی باعث میشه با هر بار کلیک کردن اونی که بازه بسته بشه

      $(panell).slideDown(280);
      /// باز میکنه
      // $(plus).html = '<img src="img/faqdown.svg" alt="" />';
      $(plus).attr("src", "img/faqdown.svg");

      $(this).css("background", "#ffffff00");

      // $(this).css("border-right", "4px solid blue");
      // $(this).css("box-shadow", "none");

      // منفی میکنه
      activeItem = $(this).find(".active-faq").attr("data-key");
    } else {
      activeItem = null;
    }
  });
}
// ///
// //////cunter-1
//-////////cunter-1
$(function () {
  function isScrolledIntoView($elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }

  function count($this) {
    var current = parseInt($this.html(), 10);
    if (
      isScrolledIntoView($this) &&
      !$this.data("isCounting") &&
      current < $this.data("count")
    ) {
      $this.html(++current);
      $this.data("isCounting", true);
      setTimeout(function () {
        $this.data("isCounting", false);
        count($this);
      }, 100);
    }
  }

  $(".c-section1").each(function () {
    $(this).data("count", parseInt($(this).html(), 10));
    $(this).html("0");
    $(this).data("isCounting", false);
  });

  function startCount() {
    $(".c-section1").each(function () {
      count($(this));
    });
  }

  $(window).scroll(function () {
    startCount();
  });

  startCount();
});

//-////////cunter-2
$(function () {
  function isScrolledIntoView($elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }

  function count($this) {
    var current = parseInt($this.html(), 10);
    if (
      isScrolledIntoView($this) &&
      !$this.data("isCounting") &&
      current < $this.data("count")
    ) {
      $this.html(++current);
      $this.data("isCounting", true);
      setTimeout(function () {
        $this.data("isCounting", false);
        count($this);
      }, 100);
    }
  }

  $(".c-section2").each(function () {
    $(this).data("count", parseInt($(this).html(), 10));
    $(this).html("0");
    $(this).data("isCounting", false);
  });

  function startCount() {
    $(".c-section2").each(function () {
      count($(this));
    });
  }

  $(window).scroll(function () {
    startCount();
  });

  startCount();
});

// ////////////Moresticky
function myFunctionMoresticky() {
  var dotsstickyname = document.getElementById("dotssticky");
  var morestickyText = document.getElementById("more-sticky");

  if (dotsstickyname.style.display === "none") {
    dotsstickyname.style.display = "none";
    morestickyText.style.display = "block";
    // dotsstickyname.style.display = "block";
    // morestickyText.style.display = "none";
  } else {
    dotsstickyname.style.display = "none";
    morestickyText.style.display = "block";
  }
}
/////// copy
function copy() {
  const element = document.querySelector("#shortLink");
  // Create a fake `textarea` and set the contents to the text
  // you want to copy
  const storage = document.createElement("textarea");
  storage.value = element.innerHTML;
  element.appendChild(storage);

  // Copy the text in the fake `textarea` and remove the `textarea`
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand("copy");
  element.removeChild(storage);
  $("#shortLink").html("کپی شد!");
}
/////// copy-1
function copy1() {
  const element = document.querySelector("#shortLink1");
  // Create a fake `textarea` and set the contents to the text
  // you want to copy
  const storage = document.createElement("textarea");
  storage.value = element.innerHTML;
  element.appendChild(storage);

  // Copy the text in the fake `textarea` and remove the `textarea`
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand("copy");
  element.removeChild(storage);
  $("#shortLink1").html("کپی شد!");
}
////// copy-2
function copy2() {
  const element = document.querySelector("#shortLink2");
  // Create a fake `textarea` and set the contents to the text
  // you want to copy
  const storage = document.createElement("textarea");
  storage.value = element.innerHTML;
  element.appendChild(storage);

  // Copy the text in the fake `textarea` and remove the `textarea`
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand("copy");
  element.removeChild(storage);
  $("#shortLink2").html("کپی شد!");
}
////// copy-3
function copy3() {
  const element = document.querySelector("#shortLink3");
  // Create a fake `textarea` and set the contents to the text
  // you want to copy
  const storage = document.createElement("textarea");
  storage.value = element.innerHTML;
  element.appendChild(storage);

  // Copy the text in the fake `textarea` and remove the `textarea`
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand("copy");
  element.removeChild(storage);
  $("#shortLink3").html("کپی شد!");
}
////// copy-4
function copy4() {
  const element = document.querySelector("#shortLink4");
  // Create a fake `textarea` and set the contents to the text
  // you want to copy
  const storage = document.createElement("textarea");
  storage.value = element.innerHTML;
  element.appendChild(storage);

  // Copy the text in the fake `textarea` and remove the `textarea`
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand("copy");
  element.removeChild(storage);
  $("#shortLink4").html("کپی شد!");
}