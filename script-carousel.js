createCarousel("carouselisa");
createCarousel("carouselrobot");
createCarousel("carouseltipe1");
createCarousel("carouseltipe2");

function createCarousel(carouselId) {
    const carousel = document.querySelector(`#${carouselId} .carousel`);
    const prevButton = document.querySelector(`#${carouselId} #prevButton`);
    const nextButton = document.querySelector(`#${carouselId} #nextButton`);
    let currentIndex = 0;

    function showImage(index) {
        const offset = -index * 100; // 100% de largeur par image
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        showImage(currentIndex);
    });

    // Afficher la première image au chargement de la page
    showImage(currentIndex);
}
