document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;

    function updateCarousel(newIndex) {
        // Remove active class from current card and dot
        projectCards[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');

        // Update current index
        currentIndex = newIndex;

        // Add active class to new card and dot
        projectCards[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');

        // Update project color for dots
        const currentColor = projectCards[currentIndex].style.getPropertyValue('--project-color');
        document.documentElement.style.setProperty('--current-project-color', currentColor);
    }

    // Add click handlers for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (index !== currentIndex) {
                updateCarousel(index);
            }
        });
    });

    // Add click handlers for prev/next buttons
    prevButton.addEventListener('click', () => {
        const newIndex = currentIndex === 0 ? projectCards.length - 1 : currentIndex - 1;
        updateCarousel(newIndex);
    });

    nextButton.addEventListener('click', () => {
        const newIndex = currentIndex === projectCards.length - 1 ? 0 : currentIndex + 1;
        updateCarousel(newIndex);
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevButton.click();
        } else if (e.key === 'ArrowRight') {
            nextButton.click();
        }
    });
}); 