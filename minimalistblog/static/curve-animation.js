import anime from "https://cdn.skypack.dev/animejs@3.2.1";
// Create a timeline for parallel animations
window.post_tree_animations = [];

// Individual durations for customising each tree
const treetrunk_durations = [4000, 3000];
const branch_start_delay = [300, 150]
const branch_durations = [400, 400];
const branch_delay_durations = [500, 500];

// Animation for each #PostTree
for (let i = 1; i <= 2; i++) {
  let timeline = anime.timeline({ autoplay: false });
  
  timeline
    .add({
      targets: `#PostTree${i} #Tree > #Treetrunk > path`,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "linear",
      duration: treetrunk_durations[i-1],
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
      duration: branch_durations[i-1],
      delay: function (el, j) {
        // delay in the animation between each target
        return j * branch_delay_durations[i-1];
      },
      direction: "alternate",
      loop: false,
    }, branch_start_delay[i-1]); 
  
  window.post_tree_animations.push(timeline);
}

