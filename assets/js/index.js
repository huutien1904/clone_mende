// let modelItem = document.getElementsByClassName("section_item");
// console.log(modelItem);
// Array.from(modelItem).forEach((item, index) => {
//   item.addEventListener("click", function () {
//     item.children[0].classList.toggle("link-active");
//     console.log(item.children);
//     let currMenu = document.querySelector(".link-active");

//     if (currMenu) {
//       currMenu.classList.remove("link-active");
//     }
//   });
// });
console.log($(".section_item"));
$(".section_item").click(function () {
  $(this).find(".model-item").toggleClass("link-active");
  $(this).siblings().find(".model-item").removeClass("link-active");
});
