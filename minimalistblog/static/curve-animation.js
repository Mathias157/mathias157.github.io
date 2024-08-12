import anime from "https://cdn.skypack.dev/animejs@3.2.1";

const tree_branches = document.querySelectorAll('.container g #Tree > #Branches path');
tree_branches.forEach(element => {
  element.style.visibility = 'hidden';
});

anime({
  targets: ".container g #Tree > #Treetrunk > path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "linear",
  duration: 3000,
  delay: function (el, i) {
    return i * 350;
  },
  direction: "alternate",
  loop: false,
  complete: function() {
    // Add your next animation here
    tree_branches.forEach(element => {
      element.style.visibility = 'visible';
    });

    anime({

      targets: ".container g #Tree > #Branches path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "linear",
      duration: 500,
      delay: function (el, i) {
        return i * 350;
      },
      direction: "alternate",
      loop: false,
    });
  }
});