
// The original scale of the fruit circles (posts)
var $circle_init_scale = 1.25;

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

let post3_animation = gsap.fromTo([post_part2, post_part1, post_part3],
    {opacity: 0},
    {opacity: 1, duration: 0.5, stagger: 0.1}
);
post3_animation.pause()

// List to store fruit animations (posts)
let fruit_animations = [];

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
    for (let i = 1; i <= 3; i++) {
        
        const posts = [];
        for (let j = 1; j < 6; j++) {
            let post = document.querySelector(`#PostTree${i} #Post${j} circle`);
            
            post.style.visibility = 'visible';
            posts.push(post);
            
            post.addEventListener('mouseover', function() {
                gsap.to(post, {scale: $circle_init_scale + 0.4, duration: 0.3, transformOrigin: "center"});
                
                // Make post information visible
                const info_path = document.querySelector(`#PostTree${i} #Post${j} > g > path`)
                info_path.style.opacity = 1;
                if (j !== 3) {
                    // Just show text, except for post 3
                    const info_text = document.querySelector(`#PostTree${i} #Post${j} > g > text`)
                    info_text.style.opacity = 1;
                }
            })
            
            post.addEventListener('mouseout', function() {
                gsap.to(post, {scale: $circle_init_scale, duration: 0.3, transformOrigin: "center"});
                
                // Make post information visible
                const info_path = document.querySelector(`#PostTree${i} #Post${j} > g > path`)
                info_path.style.opacity = 0;
                if (j !== 3) {
                    // Just show text, except for post 3
                    const info_text = document.querySelector(`#PostTree${i} #Post${j} > g > text`)
                    info_text.style.opacity = 0;
                }
            })
        }
        
        post3.addEventListener('mouseover', function() {
            post3_animation.play();
            
        });
        
        post3.addEventListener('mouseout', function() {
            // post_thumbnail.style.opacity = 0;
            post3_animation.reverse();
            
        });
        
        
        // Animation to make the posts appear with a staggered effect
        let fruit_animation = gsap.timeline();
        fruit_animation.add(gsap.fromTo(posts, 
                    { scale: 0, visibility: 'visible', transformOrigin: "center"}, 
                    { scale: $circle_init_scale, duration: 0.7, transformOrigin: "center", stagger: 0.5, delay: 0.7, paused: false }
                ));
        fruit_animations.push(fruit_animation)
        
        // Start the animations when in view
        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // fruit_animations[i].paused = false; 
                    fruit_animations[i-1].restart();
                    window.post_tree_animations[i-1].restart();
                }
            });
        }, { rootMargin: '0px', threshold: 0 });
        observer.observe(document.querySelector(`#PostTree${i} #Posts`));
    }
});


