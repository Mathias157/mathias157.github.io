import anime from "https://cdn.skypack.dev/animejs@3.2.1";

anime({
  targets: ".container g path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "linear",
  duration: 3500,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: false
});