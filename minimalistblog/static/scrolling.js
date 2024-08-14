// Prevent the browser from restoring the scroll position on page reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Scroll down the page on load
window.addEventListener('load', function() {
    window.scrollTo(0, document.body.scrollHeight);
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    window.currentSection = 0;
    

    // Play all animations before any scrolling, to ensure that desktop users see it too
    for (i = 0; i <= 2; i++) {
        window.fruit_animations[i].play();
        window.post_tree_animations[i].play();
    }

    // Function to scroll to the correct section
    function scrollToSection(sectionIndex) {
        // Play animations, and include delay in restart
        window.fruit_animations[window.currentSection].restart(true);
        window.post_tree_animations[window.currentSection].restart();
        
        // Scroll
        const scrollContainer = document.querySelector('.scroll-container');
        const offset = sectionIndex * -100; // Calculate offset based on section index
        scrollContainer.style.transform = `translateX(${offset}vw)`;

    }

    // Add event listener to window innerWidth
    window.addEventListener('resize', function() {
        // Handle window resize event
        // You can add your code here to handle the resize event
        if (window.innerWidth > 750) {
            window.currentSection = 0;
            scrollToSection(0)
        }
    });

    // Change section with arrowkeys
    function handleKeyPress(event) {
        if (window.innerWidth <= 750) {
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
    }

    // Add event listener for arrow key presses
    document.addEventListener('keydown', handleKeyPress);

    // Change section with touch
    document.addEventListener('touchstart', function (event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }, false);
    
    document.addEventListener('touchend', function (event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGesture();
    }, false);
    
    function handleGesture() {
        const sensitivity = 25; // Adjust the sensitivity here
        const deltaX = touchendX - touchstartX;
        const deltaY = touchendY - touchstartY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX < -sensitivity) {
                if (window.currentSection < sections.length - 1) {
                    window.currentSection++;
                    scrollToSection(window.currentSection);
                }
            } else if (deltaX > sensitivity) {
                if (window.currentSection > 0) {
                    window.currentSection--;
                    scrollToSection(window.currentSection);
                }
            }
        }
    }
});
