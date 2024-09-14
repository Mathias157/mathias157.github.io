import anime from "https://cdn.skypack.dev/animejs@3.2.1";
// Create a timeline for parallel animations
window.post_tree_animations = [];

// Animation for each #PostTree
for (let i = 1; i <= 3; i++) {
  let timeline = anime.timeline({ autoplay: false });
  
  timeline
    .add({
      targets: `#PostTree${i} #Tree > #Treetrunk > path`,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "linear",
      duration: 3600,
      delay: function (el, j) {
        return j * 0;
      },
      direction: "alternate",
      loop: false,
    }, 0) // The start of the timeline
    .add({
      // The order of the animations depend on the order of the Branches paths in the inline svg
      targets: `#PostTree${i} #Tree > #Branches path`,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "linear",
      duration: 600,
      delay: function (el, j) {
        // delay in the animation between each target
        return j * 500;
      },
      direction: "alternate",
      loop: false,
    }, 100); // The start of the timeline delayed by 500 ms
  
  window.post_tree_animations.push(timeline);
}

