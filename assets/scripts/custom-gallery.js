const gardenGalleryBox = document.querySelector('#gardenBox');
const toiletsGalleryBox = document.querySelector('#toiletsBox');
const roomsGalleryBox = document.querySelector('#roomsBox');
const secondToiletsGallery = document.querySelector("#next-page-gallery");
const firstToiletsGallery = document.querySelector("#prev-page-gallery");

gardenGalleryBox.addEventListener('click', e => {
    const activeGallery = document.querySelectorAll('.activeGallery');
    const activeGallerySelect = document.querySelectorAll('.activeGalletySelect')
    const gardenGallery = document.querySelector('#garden');

    activeGallery[0].classList.remove('activeGallery'); 
    activeGallerySelect['0'].classList.remove('activeGalletySelect');
    gardenGallery.classList.add('activeGallery');
    gardenGalleryBox.classList.add('activeGalletySelect');
});

toiletsGalleryBox.addEventListener('click', e => {
    const activeGallery = document.querySelectorAll('.activeGallery');
    const activeGallerySelect = document.querySelectorAll('.activeGalletySelect')
    const toiletsGallery = document.querySelector('#toilets');

    activeGallery[0].classList.remove('activeGallery'); 
    activeGallerySelect['0'].classList.remove('activeGalletySelect');
    toiletsGallery.classList.add('activeGallery');
    toiletsGalleryBox.classList.add('activeGalletySelect');
});

secondToiletsGallery.addEventListener('click', e => {
    const activeGallery = document.querySelectorAll('.activeGallery');
    const secondToiletsGallery = document.querySelector('#toilets-second');

    activeGallery[0].classList.remove('activeGallery'); 
    secondToiletsGallery.classList.add('activeGallery');
});

firstToiletsGallery.addEventListener('click', e => {
    const activeGallery = document.querySelectorAll('.activeGallery');
    const secondToiletsGallery = document.querySelector('#toilets');

    activeGallery[0].classList.remove('activeGallery'); 
    secondToiletsGallery.classList.add('activeGallery');
});

roomsGalleryBox.addEventListener('click', e => {
    const activeGallery = document.querySelectorAll('.activeGallery');
    const activeGallerySelect =document.querySelectorAll('.activeGalletySelect')
    const roomsGallery = document.querySelector('#rooms');

    activeGallery[0].classList.remove('activeGallery'); 
    activeGallerySelect['0'].classList.remove('activeGalletySelect');
    roomsGallery.classList.add('activeGallery');
    roomsGalleryBox.classList.add('activeGalletySelect');
});