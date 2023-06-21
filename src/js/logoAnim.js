var tl = gsap.timeline({});
gsap.fromTo(".logo-animated", { autoAlpha: 0 }, { autoAlpha: 1 });
tl.fromTo(
  ".letter",
  {
    drawSVG: "0%",
    opacity: 0,
  },
  {
    drawSVG: "100%",
    opacity: 1,
    delay: 1.5,
    duration: 1.5,
    stagger: 0.02,
    ease: CustomEase.create("custom", "M0,0,C0.396,0,-0.13,1,1,1"),
  },
  "-=0.7"
);
