/* Бургер меню */
document.addEventListener("DOMContentLoaded", clickTabs());
var menuAct = document.querySelector(".menu-active");
var menu = document.querySelector(".menu");
var menuBack = document.querySelector(".menu-all");
var menulink = document.querySelector(".menu-link-box");

menu.addEventListener("click", function () {
  document.getElementById("menu-first").style.display = "none";
  menuAct.style.display = "block";
  menuBack.style.display = "block";
});
menuAct.addEventListener("click", function () {
  document.getElementById("menu-first").style.display = "block";
  menuAct.style.display = "none";
  menuBack.style.display = "none";
});
menulink.addEventListener("click", function () {
  document.getElementById("menu-first").style.display = "block";
  menuAct.style.display = "none";
  menuBack.style.display = "none";
});
/* Подсветка табов */
function clickTabs() {
  var tabs = document.querySelector("#tabs");
  var item = document.querySelectorAll(".item");
  var itemContent = document.querySelectorAll(".item-content");

  tabs.addEventListener("click", function (event) {
    if (event.target.classList == "item") {
      for (let i = 0; i < item.length; i++) {
        item[i].classList.remove("active");
        itemContent[i].classList.remove("active");
      }

      event.target.classList.add("active");
      let idItemContent = event.target.id + "-content";
      let iC = document.getElementById(idItemContent);
      iC.classList.add("active");
    }
  });
}
/* перекликивание табов */

document.getElementById("item-1").addEventListener("click", function () {
  document.getElementById("item-1-content").style.display = "block";
  document.getElementById("item-2-content").style.display = "none";
  document.getElementById("item-3-content").style.display = "none";
});

document.getElementById("item-2").addEventListener("click", function () {
  document.getElementById("item-1-content").style.display = "none";
  document.getElementById("item-2-content").style.display = "block";
  document.getElementById("item-3-content").style.display = "none";
});

document.getElementById("item-3").addEventListener("click", function () {
  document.getElementById("item-1-content").style.display = "none";
  document.getElementById("item-2-content").style.display = "none";
  document.getElementById("item-3-content").style.display = "block";
});
