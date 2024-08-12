document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    let currentSection = 0;

    // Function to scroll to the correct section
    function scrollToSection(sectionIndex) {
        const scrollContainer = document.querySelector('.scroll-container');
        const offset = sectionIndex * -100; // Calculate offset based on section index
        scrollContainer.style.transform = `translateX(${offset}vw)`;
    }

    // Function to handle key press events
    function handleKeyPress(event) {
        if (event.key === 'ArrowRight') {
            if (currentSection < sections.length - 1) {
                currentSection++;
                scrollToSection(currentSection);
            }
        } else if (event.key === 'ArrowLeft') {
            if (currentSection > 0) {
                currentSection--;
                scrollToSection(currentSection);
            }
        }
    }

    // Function to handle wheel scroll events
    function handleWheelScroll(event) {
        const delta = Math.sign(event.deltaY);
        if (delta > 0) {
            if (currentSection < sections.length - 1) {
                currentSection++;
                scrollToSection(currentSection);
            }
        } else if (delta < 0) {
            if (currentSection > 0) {
                currentSection--;
                scrollToSection(currentSection);
            }
        }
    }

    // Add event listener for arrow key presses
    document.addEventListener('keydown', handleKeyPress);

    // Add event listener for wheel scroll
    document.addEventListener('wheel', handleWheelScroll, { passive: true });
});