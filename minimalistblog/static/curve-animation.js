import anime from "https://cdn.skypack.dev/animejs@3.2.1";

// Create a timeline for parallel animations
const timeline = anime.timeline({ autoplay: false });

timeline
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
      return i * 500;
    },
    direction: "alternate",
    loop: false,
  }, 100); // The start of the timeline delayed by 500 ms

// Function to check if a section is in the viewport
function isSectionInView(section) {
  const rect = section.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to play the animation when a section is in view
function playAnimationIfInView(section) {
  if (isSectionInView(section)) {
    timeline.play();
  } else {
    timeline.pause();
  }
}

// Get the section element
const section = document.querySelector(".tree_pot");

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      playAnimationIfInView(entry.target);
    }
  });
});

// Observe the section element
observer.observe(section);
