// gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin)

document.querySelector('.curve1').addEventListener('load', function() {

    const svgDoc = this.contentDocument
    
    // Set svg file to no opacity
    const g1 = svgDoc.querySelector('path')
    
    g1.style.overflow = "visible"

    // Timeline
    const t1 = gsap.timeline({defaults: {ease: 'power4.out', duration: .7}})

    // Set visibility
    gsap.set(g1, {
        autoAlpha: 1
    })

    // Move slightly
    gsap.set(g1, {
        xPercent: 0
    })

    gsap.to(g1, {
        scale: 1.5,
        duration: 2
    })

    // Draw path

    // gsap.fromTo(g1, {
    //     drawSVG: "0%"
    // }, {
    //     duration: 2,
    //     drawSVG: "100%",
    //     ease: "power4.out"
    // })

})