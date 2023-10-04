const menu = document.querySelector("#menu");
const menuMobile = document.querySelector("#menuMobile");
const dropDownLink = document.querySelector("#dropDownLink");
const dropDown = document.querySelector("#dropDown");
const imgBox = document.querySelector("#imgBox");

menu.addEventListener("click", () => {
  if (menuMobile.classList.contains("hidden")) {
    menuMobile.classList.remove("hidden");
    menuMobile.classList.add("xl:left-24");
    menuMobile.classList.add("left-6");
    imgBox.classList.add("relative");
  } else {
    menuMobile.classList.add("hidden");
    imgBox.classList.remove("relative");
  }
});

dropDownLink.addEventListener("click", () => {
  if (dropDown.classList.contains("hidden")) {
    dropDown.classList.remove("hidden");
  } else {
    dropDown.classList.add("hidden");
  }
});
