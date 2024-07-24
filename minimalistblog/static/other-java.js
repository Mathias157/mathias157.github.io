var $circle_init_scale = 1.25;

// Make post invisible
function makeInvisible(post_id) {
    const post = document.getElementById(post_id)
    post.style.visibility = 'hidden';
}

// Add hover effect to all elements with IDs in the form Post1, Post2, ..., PostN
// const posts = document.querySelector('#Posts')
const posts = [];
for (let i = 1; i < 6; i++) {
    let post = document.querySelector(`#Post${i} circle`);

    post.style.visibility = 'visible';
    posts.push(post);

    post.addEventListener('mouseover', function() {
        gsap.to(post, {scale: $circle_init_scale + 0.7, duration: 0.3, transformOrigin: "center"});
    })
    
    post.addEventListener('mouseout', function() {
        gsap.to(post, {scale: $circle_init_scale, duration: 0.3, transformOrigin: "center"});
        // gsap.to(post, {scale: 3.14/2, duration: 0.3, transformOrigin: "center", attr: {style : 'fill:#00afb9;'}});
    })
}

// Initial animation to make the posts appear with a staggered effect
gsap.fromTo(posts, 
    { scale: 0, visibility: 'visible', transformOrigin: "center" }, 
    { scale: $circle_init_scale, duration: 1, transformOrigin: "center", stagger: 0.5 }
);