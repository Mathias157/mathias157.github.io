var $circle_init_scale = 1.25;

// Wait for the SVG to load before applying effects
document.addEventListener('DOMContentLoaded', function() {
    // Make all elements visible
    const all_elements = Array.from(document.querySelectorAll('g'));
    all_elements.forEach(element => {
        element.style.visibility = 'visible';
    })

    // Add hover effect to all elements with IDs in the form Post1, Post2, ..., PostN
    // ..except for Post 3, where we have a custom thumbnail
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
            info_path.style.opacity = 1;
            if (i !== 3) {
                // Just show text, except for post 3
                const info_text = document.querySelector(`#Post${i} > g > text`)
                info_text.style.opacity = 1;
            }
        })
        
        post.addEventListener('mouseout', function() {
            gsap.to(post, {scale: $circle_init_scale, duration: 0.3, transformOrigin: "center"});
            
            // Make post information visible
            const info_path = document.querySelector(`#Post${i} > g > path`)
            info_path.style.opacity = 0;
            if (i !== 3) {
                // Just show text, except for post 3
                const info_text = document.querySelector(`#Post${i} > g > text`)
                info_text.style.opacity = 0;
            }
        })
        }

        // Post 3 custom thumbnail animation (should be able to be automatised with Array.from(document.querySelectorAll('id_name')) if id_name contains all parts?)
        let post_part1 = document.querySelector('#Posts > #Post3 > #thumbnail #hvis_vinden');
        post_part1.style.opacity = 0;
        let post_part2 = document.querySelector('#Posts > #Post3 > #thumbnail #texture');
        post_part2.style.opacity = 0;
        let post_part3 = document.querySelector('#Posts > #Post3 > #thumbnail #vandrer_vider');
        post_part3.style.opacity = 0;
        let post3 = document.querySelector('#Post3 circle');
        // Set upper layer opacities to 1
        let post_thumbnail = document.querySelector('#Posts > #Post3 > #thumbnail');
        post_thumbnail.style.opacity = 1;
        
        post3.addEventListener('mouseover', function() {
            gsap.fromTo([post_part2, post_part1, post_part3],
                {opacity: 0},
                {opacity: 1, duration: 0.5, stagger: 0.1}
            )
            
        });
        
        post3.addEventListener('mouseout', function() {
            // post_thumbnail.style.opacity = 0;
            gsap.fromTo([post_part3, post_part1, post_part2],
                {opacity: 1},
                {opacity: 0, duration: 0.5, stagger: 0.1}
            )

        });

    // Initial animation to make the posts appear with a staggered effect
    gsap.fromTo(posts, 
        { scale: 0, visibility: 'visible', transformOrigin: "center" }, 
        { scale: $circle_init_scale, duration: 1, transformOrigin: "center", stagger: 0.5 }
    );
})