const wishListEmptyContainer = document.querySelector(".wishList-empty-container");
const wishListCardContainer = document.querySelector(".wishList-cards");
const closeBtn = document.querySelectorAll(".card .btn-close");
const wishListCards = [...document.querySelectorAll(".card")];

closeBtn.forEach(btn => {
    btn.addEventListener("click", (ev) => {
        const cardToBeDismissed = ev.target.parentNode;
        cardToBeDismissed.style.display = "none";
        
        if(wishListCards.every(card => card.style.display === 'none')) {
            wishListCardContainer.style.margin = '0';
            console.log(wishListCards.length);
            wishListEmptyContainer.style.display = "flex";
        }
    })
});