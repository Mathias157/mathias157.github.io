// Using java
const curve1 = document.querySelector('#Curve')

// Move slightly
gsap.set(curve1, {
    xPercent: 0
})

gsap.to(curve1, {
    scale: 1.5,
    duration: 2
})
