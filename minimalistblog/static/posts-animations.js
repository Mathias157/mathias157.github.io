
// The original scale of the fruit circles (posts)
var $circle_init_scale = 1.25;


// List to store fruit animations (posts)
window.fruit_animations = [];

// Wait for the SVG to load before applying effects
document.addEventListener('DOMContentLoaded', function() {

    // Add hover effect to all elements with IDs in the form Post1, Post2, ..., PostN
    for (let i = 1; i <= 3; i++) {
        
        const post_circles = [];
        let N_posts = document.querySelectorAll(`#PostTree${i} #Posts > g`).length;
        // console.log(document.querySelectorAll(`#PostTree${i} #Posts > g`))
        for (let j = 1; j <= N_posts; j++) {
            let post = document.querySelector(`#PostTree${i} #Post${j}`);

            // Hide viewbuttons, if they exist
            let post_viewbutton = post.querySelector(`#ViewButton${j}`);
            if (post_viewbutton) {
                post_viewbutton.style.opacity = 0;
            }

            let post_circle = post.querySelector(`circle`);
            
            post_circles.push(post_circle);
            
            // Hovering animation
            post_circle.addEventListener('mouseover', function() {
                gsap.to(post_circle, {scale: $circle_init_scale + 0.4, duration: 0.3, transformOrigin: "center"});
                
                // Make post information visible
                let info_text = document.querySelectorAll(`#PostTree${i} #Post${j} > g > text`)
                info_text.forEach(element => {
                    element.style.opacity = 1;
                });

                // Show viewbutton if on small width device (note: Now it only shows the rounded rectangle!)
                if (window.innerWidth < 750) {
                    post_viewbutton.style.opacity = 1;
                    post_viewbutton.addEventListener('click', function() {
                        openPost(i, j)
                })
                }
            })
            
            // Hover out
            post_circle.addEventListener('mouseout', function() {
                gsap.to(post_circle, {scale: $circle_init_scale, duration: 0.3, transformOrigin: "center"});
                
                // Make post information invisible
                let info_text = document.querySelectorAll(`#PostTree${i} #Post${j} > g > text`)
                info_text.forEach(element => {
                    element.style.opacity = 0;
                });

                // Fade viewbutton away with small width device
                if (window.innerWidth < 750) {
                    post_viewbutton.style.opacity = 0;
                }
            })
            
            // Click
            post_circle.addEventListener('click', function() {
                if (window.innerWidth >= 750) {
                    openPost(i,j)
                }
            })
        }

        
        // Animation to make the posts appear with a staggered effect
        let fruit_animation = gsap.fromTo(post_circles, 
                    { scale: 0, visibility: 'visible', transformOrigin: "center"}, 
                    { scale: $circle_init_scale, duration: 0.7, transformOrigin: "center", stagger: 0.5, delay: 0.7, paused: true}
                );
        window.fruit_animations.push(fruit_animation)
    }
    
});

// Closing and opening posts
function openPost(tree, post) {
    let post_content = document.querySelector(`#Post${tree}${post}Content`)
    post_content.style.visibility = 'visible';
    post_content.style.opacity = 1;
    
    post_content.querySelector('button').addEventListener('click', function() {
        closePost(tree, post)
    })
}

function closePost(tree, post) {
    let post_content = document.querySelector(`#Post${tree}${post}Content`)
    post_content.style.opacity = 0;
    setTimeout(function() {
        post_content.style.visibility = 'hidden';
    }, 500);
}