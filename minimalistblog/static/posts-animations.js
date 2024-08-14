
// The original scale of the fruit circles (posts)
var $circle_init_scale = 1.25;


// List to store fruit animations (posts)
window.fruit_animations = [];

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
        let N_posts = document.querySelectorAll(`#PostTree${i} #Posts > g`).length;
        console.log(document.querySelectorAll(`#PostTree${i} #Posts > g`))
        for (let j = 1; j <= N_posts; j++) {
            let post = document.querySelector(`#PostTree${i} #Post${j} circle`);
            
            post.style.visibility = 'visible';
            posts.push(post);
            
            post.addEventListener('mouseover', function() {
                gsap.to(post, {scale: $circle_init_scale + 0.4, duration: 0.3, transformOrigin: "center"});
                
                // Make post information visible
                let info_text = document.querySelectorAll(`#PostTree${i} #Post${j} > g > text`)
                info_text.forEach(element => {
                    // console.log(`Making text visible for PostTree${i} Post${j}`);
                    element.style.opacity = 1;
                });
            })
            
            post.addEventListener('mouseout', function() {
                gsap.to(post, {scale: $circle_init_scale, duration: 0.3, transformOrigin: "center"});
                
                // Make post information invisible
                let info_text = document.querySelectorAll(`#PostTree${i} #Post${j} > g > text`)
                info_text.forEach(element => {
                    // console.log(`Making text visible for PostTree${i} Post${j}`);
                    element.style.opacity = 0;
                });
            })
        }

        
        // Animation to make the posts appear with a staggered effect
        let fruit_animation = gsap.fromTo(posts, 
                    { scale: 0, visibility: 'visible', transformOrigin: "center"}, 
                    { scale: $circle_init_scale, duration: 0.7, transformOrigin: "center", stagger: 0.5, delay: 0.7, paused: true}
                );
        window.fruit_animations.push(fruit_animation)
    }
    
});


