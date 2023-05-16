console.log("animation file is connected");

function getTitleHeight() {
  title = document.querySelector(".text-animated");
  titleHeight = title.offsetHeight;
  console.log("h1 title is " + titleHeight + " px");
}

// Title and subtitle
function titleAnimation() {
  const targets = gsap.utils.toArray(".text-animated");

  targets.forEach((target) => {
    let SplitClient = new SplitText(target, {
      type: "chars, words, lines",
      charsClass: "lineParent",
    });
    let SplitParent = new SplitText(target, {
      type: "chars, words, lines",
      charsClass: "lineChild",
    });
    let chars = SplitParent.chars; //an array of all the divs that wrap each character
    gsap.fromTo(".text-animated", { autoAlpha: 0 }, { autoAlpha: 1 });
    gsap.from(chars, {
      duration: 0.8,
      delay: 0.02,
      y: titleHeight,
      ease: CustomEase.create("custom", "M0,0,C0.496,0.298,0,1,1,1"),
      stagger: 0.04,
      scrollTrigger: {
        trigger: target,
        markers: false,
        start: "top 100%",
        scrub: false,
      },
    });
  });
}
// Title and subtitle
function paragraphAnimation() {
  const targets = gsap.utils.toArray(".paragraph-animated");

  targets.forEach((target) => {
    let SplitChild = new SplitText(target, {
      type: "lines",
      linesClass: "lineParent",
    });
    let SplitParent = new SplitText(target, {
      type: "lines",
      linesClass: "lineChild",
    });
    let lines = SplitChild.lines; //an array of all the divs that wrap each character
    gsap.fromTo(".paragraph-animated", { autoAlpha: 0 }, { autoAlpha: 1 });
    gsap.from(lines, {
      opacity: 0,
      duration: 1.2,
      delay: 0.8,
      y: 50,
      ease: CustomEase.create("custom", "M0,0,C0.496,0.298,0,1,1,1"),
      stagger: 0.1,
      scrollTrigger: {
        trigger: target,
        markers: false,
        start: "top 100%",
        scrub: false,
      },
    });
  });
}
getTitleHeight();

gsap.delayedCall(1, titleAnimation);
gsap.delayedCall(1, paragraphAnimation);
