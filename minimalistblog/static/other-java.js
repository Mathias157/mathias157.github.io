var $circle_init_scale = 1.25;

// Wait for the SVG to load before applying effects
document.addEventListener('DOMContentLoaded', function() {
    // Make all elements visible
    const all_elements = Array.from(document.querySelectorAll('g'));
    all_elements.forEach(element => {
        element.style.visibility = 'visible';
    })

    // Add hover effect to all elements with IDs in the form Post1, Post2, ..., PostN
    // const posts = document.querySelector('#Posts')
    const posts = [];
    for (let i = 1; i < 6; i++) {
        let post = document.querySelector(`#Post${i} circle`);

        post.style.visibility = 'visible';
        posts.push(post);

        post.addEventListener('mouseover', function() {
            gsap.to(post, {scale: $circle_init_scale + 0.7, duration: 0.3, transformOrigin: "center"});

            // Make post information visible
            const info_path = document.querySelector(`#Post${i} > g > path`)
            const info_text = document.querySelector(`#Post${i} > g > text`)
            info_path.style.opacity = 1;
            info_text.style.opacity = 1;
        })
        
        post.addEventListener('mouseout', function() {
            gsap.to(post, {scale: $circle_init_scale, duration: 0.3, transformOrigin: "center"});

            // Make post information visible
            const info_path = document.querySelector(`#Post${i} > g > path`)
            const info_text = document.querySelector(`#Post${i} > g > text`)
            info_path.style.opacity = 0;
            info_text.style.opacity = 0;
        })
    }

    // Initial animation to make the posts appear with a staggered effect
    gsap.fromTo(posts, 
        { scale: 0, visibility: 'visible', transformOrigin: "center" }, 
        { scale: $circle_init_scale, duration: 1, transformOrigin: "center", stagger: 0.5 }
    );
})