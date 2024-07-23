// Get svg
const svg1 = document.getElementById('mySVG')

// Change clip path
const clippath = svg1.getElementById("_clip1")
const cliprect = clippath.querySelector('rect')
cliprect.setAttribute('height', '360')
cliprect.setAttribute('width', '2423')

// Get content
const curve1 = svg1.querySelector('path')

// Scale content slightly
gsap.set(curve1, {
    xPercent: 0
})

gsap.to(curve1, {
    scale: 1.5,
    duration: 2
})
