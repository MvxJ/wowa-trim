const backButton = document.querySelector(".back-to-top");
const backSecondaryButton = document.querySelector('.back-to-top-secondary');

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        backButton.classList.add("active");
        backSecondaryButton.classList.add("active");
    } else {
        backButton.classList.remove("active");
        backSecondaryButton.classList.remove("active");
    }
});