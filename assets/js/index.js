$(document).ready(function () {
  // toggle button
  $(".section_item").click(function () {
    $(this).find(".model-item").toggleClass("link-active");
    $(this).siblings().find(".model-item").removeClass("link-active");
  });
});
// $(".menu-show").hover(function () {
//   if ($(this).hasClass("expland")) {
//     $(".menu-item_list").addClass("expland");
//     $(".menu-item_list").slideDown();
//     $(".menu-show").mouseout(function () {
//       $(".menu-item_list").slideUp();
//     });
//   } else {
//     $(".menu-item_list").slideUp();
//     $(".menu-item_list").addClass("expland");
//   }
// });

// $(".menu-show").hover(function () {
//   $(".menu-item_list").css("display", "block");
//   $(".menu-item_list").slideDown();
// });
// !$(".menu-show").mouseout(function () {
//   $(".menu-item_list").slideUp();
// });
// !$(".menu-item_list").mouseout(function () {
//   $(".menu-item_list").slideUp();
// });

// slider
var slideContainer = document.querySelector(".slider");
var sliderImageAll = document.querySelectorAll(".slider img");

var prevBtn = document.querySelector("#prevBtn");
var nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = sliderImageAll[0].clientWidth;
slideContainer.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= sliderImageAll.length - 1) return;
  counter++;

  slideContainer.style.transform = "translateX(" + -size * counter + "px)";
  slideContainer.style.transition = "transform 1s ease-in-out";
});
prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  counter--;
  slideContainer.style.transform = "translateX(" + -size * counter + "px)";
  slideContainer.style.transition = "transform 0.4s ease-in-out";
});
slideContainer.addEventListener("transitionend", () => {
  if (sliderImageAll[counter].id === "lastclone") {
    slideContainer.style.transition = "none";
    counter = sliderImageAll.length - 2;
    slideContainer.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (sliderImageAll[counter].id === "firstclone") {
    slideContainer.style.transition = "none";
    counter = sliderImageAll.length - counter;
    slideContainer.style.transform = "translateX(" + -size * counter + "px)";
  }
});
