let menuBtn = document.querySelector(".header-hamburger");

let nav = document.querySelector("nav");

menuBtn.addEventListener("click", openDrawer);

function openDrawer(e) {
  e.stopPropagation();
  nav.classList.add("open");
}

nav.addEventListener("click", (e) => e.stopPropagation());

document.body.addEventListener("click", closeDrawer);

function closeDrawer(e) {
  nav.classList.remove("open");
}
