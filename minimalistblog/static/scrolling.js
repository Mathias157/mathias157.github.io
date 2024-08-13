document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    window.currentSection = 0;

    // Function to scroll to the correct section
    function scrollToSection(sectionIndex) {
        const scrollContainer = document.querySelector('.scroll-container');
        const offset = sectionIndex * -100; // Calculate offset based on section index
        scrollContainer.style.transform = `translateX(${offset}vw)`;
    }

    // Function to handle key press events
    function handleKeyPress(event) {
        if (event.key === 'ArrowRight') {
            if (window.currentSection < sections.length - 1) {
                window.currentSection++;
                scrollToSection(window.currentSection);
            }
        } else if (event.key === 'ArrowLeft') {
            if (window.currentSection > 0) {
                window.currentSection--;
                scrollToSection(window.currentSection);
            }
        }
    }

    // Function to handle wheel scroll events
    // function handleWheelScroll(event) {
    //     const delta = Math.sign(event.deltaY);
    //     if (delta > 0) {
    //         if (window.currentSection < sections.length - 1) {
    //             window.currentSection++;
    //             scrollToSection(window.currentSection);
    //         }
    //     } else if (delta < 0) {
        //         if (window.currentSection > 0) {
            //             window.currentSection--;
            //             scrollToSection(window.currentSection);
            //         }
            //     }
            // }
            
            // Function to handle touch start event
            function handleTouchStart(event) {
                touchStartX = event.touches[0].clientX;
            }
            
            // Function to handle touch move event
            function handleTouchMove(event) {
                touchEndX = event.touches[0].clientX;
            }
            
            // Function to handle touch end event
            function handleTouchEnd() {
                const deltaX = touchEndX - touchStartX;
                if (deltaX > 50) { // Swipe right
                    if (window.currentSection > 0) {
                        window.currentSection--;
                        scrollToSection(window.currentSection);
                    }
                } else if (deltaX < -50) { // Swipe left
                    if (window.currentSection < sections.length - 1) {
                        window.currentSection++;
                        scrollToSection(window.currentSection);
                    }
                }
            }
            
            // Add event listener for wheel scroll
            // document.addEventListener('wheel', handleWheelScroll, { passive: true });
            
            // Add event listeners for touch events
            document.addEventListener('touchstart', handleTouchStart);
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('touchend', handleTouchEnd);
            
            // Add event listener for arrow key presses
            document.addEventListener('keydown', handleKeyPress);
            
        });
        