const cartEmptyContainer = document.querySelector(".cart-empty-container");
const cartCardContainer = document.querySelector(".cart-cards");
const closeBtn = document.querySelectorAll(".card .btn-close");
const cartPageCards = [...document.querySelectorAll(".card")];
const cartBill = document.querySelector(".cart-bill");

closeBtn.forEach(btn => {
    btn.addEventListener("click", (ev) => {
        const cardToBeDismissed = ev.target.parentNode;
        cardToBeDismissed.style.display = "none";

        if(cartPageCards.every(card => card.style.display === 'none')) {
            cartCardContainer.style.margin = '0';
            cartEmptyContainer.style.display = "flex";
            cartBill.style.display = "none";
        }
    })
}); 