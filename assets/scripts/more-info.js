const moreButton = document.querySelector("#more-icon");
const closeButton = document.querySelector('#close-icon');

closeButton.addEventListener('click', event => {
    const box = document.querySelector('#more-info-box');
    box.classList.add('inactive-more-info-box');
});

moreButton.addEventListener('click', event => {
    const box = document.querySelector('#more-info-box');
    box.classList.remove('inactive-more-info-box');
});