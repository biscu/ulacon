console.log("animation file is connected");

function getTitleHeight() {
  title = document.querySelector(".h-animated");
  titleHeight = title.offsetHeight;
  console.log("h1 title is " + titleHeight + " px");
}
function getHeroHeight() {
  hero = document.querySelector(".hero-animated");
  heroHeight = hero.offsetHeight;
  console.log("h1 title is " + heroHeight + " px");
}

// Title
function heroAnimation() {
  const targets = gsap.utils.toArray(".hero-animated");
  targets.forEach((target) => {
    let SplitClient = new SplitText(target, {
      type: "words",
      wordsClass: "wordsParent",
      // charsClass: "charsParent",
    });
    let SplitParent = new SplitText(target, {
      type: "words",
      wordsClass: "wordsChild",
      // charsClass: "charsChild",
    });
    let words = SplitParent.words; //an array of all the divs that wrap each character
    gsap.fromTo(".h-animated", { autoAlpha: 0 }, { autoAlpha: 1 });
    gsap.from(words, {
      duration: 1.2,
      y: heroHeight,
      ease: CustomEase.create("custom", "M0,0,C0.496,0.298,0,1,1,1"),
      stagger: 0.03,
      delay: 2.4,
      scrollTrigger: {
        trigger: target,
        markers: false,
        start: "top 100%",
        scrub: false,
      },
    });
    gsap.to(words, {
      duration: 1.8,
      opacity: 0,
      ease: CustomEase.create("custom", "M0,0,C0.496,0.298,0,1,1,1"),
      stagger: -0.04,
      scrollTrigger: {
        trigger: target,
        markers: false,
        start: "bottom 40%",
        scrub: true,
      },
    });
    gsap.from(".navbar", {
      duration: 1.2,
      yPercent: -100,
      delay: 3.1,
      ease: CustomEase.create("custom", "M0,0,C0.496,0.298,0,1,1,1"),
    });
  });
}

function titleAnimation() {
  const targets = gsap.utils.toArray(".h-animated");

  targets.forEach((target) => {
    let SplitClient = new SplitText(target, {
      type: "words",
      wordsClass: "wordsParent",
      // charsClass: "charsParent",
    });
    let SplitParent = new SplitText(target, {
      type: "words",
      wordsClass: "wordsChild",
      // charsClass: "charsChild",
    });
    let words = SplitParent.words; //an array of all the divs that wrap each character
    gsap.fromTo(".h-animated", { autoAlpha: 0 }, { autoAlpha: 1 });
    gsap.from(words, {
      duration: 1.2,
      y: titleHeight,
      ease: CustomEase.create("custom", "M0,0,C0.496,0.298,0,1,1,1"),
      stagger: 0.05,
      scrollTrigger: {
        trigger: target,
        markers: false,
        start: "top 100%",
        scrub: false,
      },
    });
  });
}
//paragraph
function paragraphAnimation() {
  const targets = gsap.utils.toArray(".p-animated");
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
    gsap.fromTo(".p-animated", { autoAlpha: 0 }, { autoAlpha: 1 });
    gsap.from(lines, {
      opacity: 0,
      duration: 1.2,
      y: 50,
      ease: CustomEase.create("custom", "M0,0,C0.496,0.298,0,1,1,1"),
      stagger: 0.08,
      delay: 0.5,
      scrollTrigger: {
        trigger: target,
        markers: false,
        start: "top 100%",
        scrub: false,
      },
    });
  });
}

var tl = gsap.timeline();
tl.to(".marquee-row", {
  xPercent: -50,
  scrollTrigger: {
    trigger: ".marquee-row",
    markers: false,
    start: "top 100%",
    end: "bottom -20%",
    scrub: 0.05,
  },
});

var tlMarqueeInverted = gsap.timeline();
tlMarqueeInverted.to(".marquee-row2", {
  xPercent: -70,
  scrollTrigger: {
    trigger: ".marquee-row2",
    markers: false,
    start: "top 100%",
    end: "bottom -20%",
    scrub: 0.05,
  },
});

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
    delay: 0.7,
    duration: 1.5,
    stagger: 0.02,
    ease: CustomEase.create("custom", "M0,0,C0.396,0,-0.13,1,1,1"),
  },
  "-=0.7"
);

function loaderUp() {
  gsap.to(".loader", {
    duration: 1.4,
    delay: 2,
    yPercent: -100,
    // ease: CustomEase.create("custom", "M0,0,C0.496,0.298,0,1,1,1"),
    ease: CustomEase.create("custom", "M0,0 C0.782,0 0.324,1 1,1 "),
    // onComplete: start,
  });
  gsap.to(".logo-header", {
    duration: 0.2,
    delay: 1.4,
    yPercent: 200,
    stagger: 0.3,
    // ease: CustomEase.create("custom", "M0,0,C0.496,0.298,0,1,1,1"),
    ease: CustomEase.create("custom", "M0,0 C0.782,0 0.324,1 1,1 "),
    // onComplete: start,
  });
}

// function profileColor() {
//   gsap.to(".profile-text", {
//     backgroundColor: "#000000",
//     ease: CustomEase.create("custom", "M0,0 C0.782,0 0.324,1 1,1 "),
//     scrollTrigger: {
//       trigger: ".profile-text",
//       markers: false,
//       start: "top 100%",
//       end: "bottom 20%",
//       scrub: 0.05,
//     },
//   });
// }

function scaleProfile() {
  gsap.to(".name-image", {
    width: 250,
    // ease: CustomEase.create("custom", "M0,0,C0.496,0.298,0,1,1,1"),
    ease: CustomEase.create("custom", "M0,0 C0.782,0 0.324,1 1,1 "),
    scrollTrigger: {
      trigger: ".name-image",
      markers: false,
      start: "bottom 90%",
      end: "bottom 20%",
      scrub: 0.05,
    },
  });
}

getTitleHeight();
getHeroHeight();

function start() {
  gsap.delayedCall(0, loaderUp);
  gsap.delayedCall(0, heroAnimation);
  gsap.delayedCall(0, titleAnimation);
  gsap.delayedCall(0, paragraphAnimation);
  gsap.delayedCall(0, scaleProfile);
  // gsap.delayedCall(0, profileColor);
  console.log("animation starts");
}

start();

//ANIMATION FOR SCRUMBLE TEXT

// const landingText = ["connect", "evolve", "dominate"];
// const masterTl = gsap.timeline({ repeat: -1 });
// landingText.forEach((word) => {
//   const tl = gsap.timeline({
//     repeat: 1,
//     yoyo: true,
//     repeatDelay: 1,
//     ease: "power2.inOut",
//   });
//   tl.to(".landing-text", {
//     duration: 3,
//     scrambleText: {
//       text: word,
//       chars: "!<>-_\\/[]{}—=+*^?#",
//       //speed: 0.3,
//       newClass: "accent--text",
//       revealDelay: 0.5,
//       tweenLength: false,
//     },
//   });
//   masterTl.add(tl);
// });
