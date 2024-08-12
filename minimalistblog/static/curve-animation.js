import anime from "https://cdn.skypack.dev/animejs@3.2.1";


anime.timeline() // Create a timeline for parallel animations
.add({
  targets: "g #Tree > #Treetrunk > path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "linear",
  duration: 3000,
  delay: function (el, i) {
    return i * 0;
  },
  direction: "alternate",
  loop: false,
}, 0) // The start of the timeline
.add({
  // The order of the animations depend on the order of the Branches paths in the inline svg
  targets: "g #Tree > #Branches path",  
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "linear",
  duration: 600,
  delay: function (el, i) {
    // delay in the animation between each target
    return i * 500 
  },
  direction: "alternate",
  loop: false,
}, 100); // The start of the timeline delayed by 500 ms
