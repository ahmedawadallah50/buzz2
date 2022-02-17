const menuicon = document.getElementById("iconmenu");
const menuitems = document.getElementById("menuitems");
const icons = document.getElementById("icons");
menuitems.style.maxHeight = "0px";

menuicon.addEventListener("click", () => {
  if (menuitems.style.maxHeight == "0px") {
    menuitems.style.maxHeight = "400px";
    menuitems.style.opacity = "1";
    menuitems.style.transition = "all 0.5s";
    icons.style.opacity = "1";
    icons.style.transition = "all 0.5s";
  } else {
    menuitems.style.maxHeight = "0px";
    menuitems.style.opacity = "0";
    icons.style.opacity = "0";
  }
});
