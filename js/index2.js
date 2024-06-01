// ////////////1-readmore
function myFunctionMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "flex";
    btnText.innerHTML = "نمایش همه";
    btnText.style.marginTop = "-4rem";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "بستن";
    btnText.style.marginTop = "0rem";
    moreText.style.display = "flex";
  }
}
