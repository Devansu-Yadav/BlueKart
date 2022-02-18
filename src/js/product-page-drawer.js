const filtersSlider = document.querySelector(".filters-slider-comp");
const arrowIcon = document.querySelector(".fa-arrow-right");
const pricingFilterSidebar = document.querySelector(".pricing-filter-sidebar-small-screen");

filtersSlider.addEventListener("click", () => {
    arrowIcon.classList.toggle("fa-arrow-right");
    arrowIcon.classList.toggle("fa-arrow-left");
    if(!pricingFilterSidebar.classList.contains("filter-show")) {
        pricingFilterSidebar.classList.add("filter-show");
        overlayBg.style.display = "block";
        overlayBg.style.backgroundColor = "var(--overlay-color)";
    } else {
        pricingFilterSidebar.classList.remove("filter-show");
        overlayBg.style.display = "none";
        overlayBg.style.backgroundColor = "var(--white-color)";
    }
})