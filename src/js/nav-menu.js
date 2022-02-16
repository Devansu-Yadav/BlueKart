const hamburgerMenuBtn = document.querySelector(".nav-menu");
const closeHamburgerMenuBtn = document.querySelector(".close-nav-menu");
const navMenu = document.querySelector(".sidebar");
const overlayBg = document.querySelector(".overlay-bg");

hamburgerMenuBtn.addEventListener("click", function() {
    navMenu.classList.add("show");
    document.body.style.overflow = "hidden";
    overlayBg.style.display = "block";
    overlayBg.style.backgroundColor = "var(--overlay-color)";
})

closeHamburgerMenuBtn.addEventListener("click", function() {
    navMenu.classList.remove("show");
    document.body.style.overflow = "auto";
    overlayBg.style.display = "none";
    overlayBg.style.backgroundColor = "var(--white-color)";
})