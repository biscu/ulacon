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
step = document.querySelector(".step-wrapper");
stepHeight = step.offsetHeight;
console.log("step wrapper " + stepHeight + " px");

const ease = CustomEase.create("custom", "M0,0,C0.496,0.298,0,1,1,1");

function morph() {
  var tl = gsap.timeline();
  tl.to("#step1a", {
    morphSVG: "#step2a",
    ease: ease,
    scrollTrigger: {
      trigger: ".step1",
      markers: false,
      scrub: true,
      start: "top 30%",
      end: "bottom 50%",
    },
  });
  tl.to("#step1b", {
    morphSVG: "#step2b",
    ease: ease,
    scrollTrigger: {
      trigger: ".step1",
      markers: false,
      scrub: true,
      start: "top 30%",
      end: "bottom 50%",
    },
  });
  tl.to("#step1c", {
    morphSVG: "#step2c",
    ease: ease,
    scrollTrigger: {
      trigger: ".step1",
      markers: false,
      scrub: true,
      start: "top 30%",
      end: "bottom 50%",
    },
  });

  tl.fromTo(
    "#step1a",
    {
      morphSVG: "#step2a",
    },
    {
      morphSVG: "#step3a",
      ease: ease,
      immediateRender: false,
      scrollTrigger: {
        trigger: ".step2",
        markers: false,
        scrub: true,
        start: "top 30%",
        end: "bottom 50%",
      },
    }
  );

  tl.fromTo(
    "#step1b",
    {
      morphSVG: "#step2b",
    },
    {
      morphSVG: "#step3b",
      ease: ease,
      immediateRender: false,
      scrollTrigger: {
        trigger: ".step2",
        markers: false,
        scrub: true,
        start: "top 30%",
        end: "bottom 50%",
      },
    }
  );

  tl.fromTo(
    "#step1c",
    {
      morphSVG: "#step2c",
    },
    {
      morphSVG: "#step3c",
      ease: ease,
      immediateRender: false,
      scrollTrigger: {
        trigger: ".step2",
        markers: false,
        scrub: true,
        start: "top 30%",
        end: "bottom 50%",
      },
    }
  );

  tl.fromTo(
    "#step1a",
    {
      morphSVG: "#step3a",
    },
    {
      morphSVG: "#step4a",
      ease: ease,
      immediateRender: false,
      scrollTrigger: {
        trigger: ".step3",
        markers: false,
        scrub: true,
        start: "top 30%",
        end: "bottom 50%",
      },
    }
  );

  tl.fromTo(
    "#step1b",
    {
      morphSVG: "#step3b",
    },
    {
      morphSVG: "#step4b",
      ease: ease,
      immediateRender: false,
      scrollTrigger: {
        trigger: ".step3",
        markers: false,
        scrub: true,
        start: "top 30%",
        end: "bottom 50%",
      },
    }
  );
  tl.fromTo(
    "#step1c",
    {
      morphSVG: "#step3c",
    },
    {
      morphSVG: "#step4c",
      ease: ease,
      immediateRender: false,
      scrollTrigger: {
        trigger: ".step3",
        markers: false,
        scrub: true,
        start: "top 30%",
        end: "bottom 50%",
      },
    }
  );
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
      ease: ease,
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
      ease: ease,
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
      ease: ease,
    });
    gsap.to(".service", {
      y: 0,
      opacity: 1,
      duration: 1.2,
      delay: 3.1,
      ease: ease,
      stagger: 0.1,
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
      duration: 1,
      y: titleHeight,
      ease: ease,
      stagger: 0.04,
      scrollTrigger: {
        trigger: target,
        markers: false,
        start: "top 100%",
      },
    });
  });
}

function animateClients() {
  gsap.to(".client-item", {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: ease,
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".client-item",
      start: "top 100%",
    },
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
      ease: ease,
      stagger: 0.08,
      delay: 0.3,
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
  xPercent: -10,
  scrollTrigger: {
    trigger: ".marquee-row",
    markers: false,
    start: "top 100%",
    end: "bottom -20%",
    scrub: 0.05,
  },
});

var tlMarquee2 = gsap.timeline();
tlMarquee2.to(".marquee-row2", {
  xPercent: -15,
  scrollTrigger: {
    fastScrollEnd: true,
    trigger: ".marquee-row2",
    markers: false,
    start: "top 100%",
    end: "bottom -20%",
    scrub: 0.05,
  },
});

var tlMarquee3 = gsap.timeline();
tlMarquee3.to(".marquee-row3", {
  xPercent: -20,
  scrollTrigger: {
    fastScrollEnd: true,
    trigger: ".marquee-row3",
    markers: false,
    start: "top 100%",
    end: "bottom -20%",
    scrub: 0.05,
  },
});

var clientList = document.getElementById("clientList").offsetWidth;
console.log(clientList);

// ScrollTrigger.batch(".client-item", {
//   onEnter: (batch) =>
//     gsap.to(batch, {
//       width: "90%",
//       duration: 1,
//       ease: CustomEase.create("custom", "M0,0,C0.396,0,-0.13,1,1,1"),
//       scrollTrigger: {
//         trigger: batch,
//         markers: false,
//         start: "top 120%",
//         end: "bottom 0%",
//         scrub: 0.01,
//       },
//     }),
// });

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
    // ease: ease,
    ease: CustomEase.create("custom", "M0,0 C0.782,0 0.324,1 1,1 "),
    // onComplete: start,
  });
  gsap.to(".logo-header", {
    duration: 0.2,
    delay: 1.4,
    yPercent: 200,
    stagger: 0.3,
    // ease: ease,
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
    scale: 1.4,
    duration: 1.2,
    ease: ease,
    scrollTrigger: {
      trigger: ".name-image",
      markers: false,
      start: "top 90%",
      scrub: false,
    },
  });
  gsap.to(".target", {
    opacity: 1,
    duration: 0.5,
    ease: ease,
    scrollTrigger: {
      trigger: ".target",
      markers: false,
      start: "top 80%",
      scrub: false,
    },
  });
  gsap.to(".target", {
    scale: 1.6,
    rotation: 0,
    duration: 0.8,
    ease: ease,
    scrollTrigger: {
      trigger: ".target",
      markers: false,
      start: "top 80%",
      scrub: false,
    },
  });
  gsap.to(".target-tag", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    duration: 0.8,
    ease: ease,
    scrollTrigger: {
      trigger: ".target",
      markers: false,
      start: "top 80%",
      scrub: false,
    },
  });
  gsap.to(".name-left", {
    translateX: -20,
    duration: 1.2,
    ease: ease,
    scrollTrigger: {
      trigger: ".name-image",
      markers: false,
      start: "top 90%",
      end: "top 50%",
      scrub: false,
    },
  });
  gsap.to(".name-right", {
    translateX: 20,
    duration: 1.2,
    ease: ease,
    scrollTrigger: {
      trigger: ".name-image",
      markers: false,
      start: "top 90%",
      end: "top 50%",
      scrub: false,
    },
  });
}

function perpsectiveText() {
  const text = gsap.utils.toArray(".mission");
  text.forEach((text) => {
    // let SplitClient = new SplitText(text, {
    //   type: "words",
    //   wordsClass: "wordsParent",
    //   // charsClass: "charsParent",
    // });
    // let SplitParent = new SplitText(text, {
    //   type: "words",
    //   wordsClass: "wordsChild",
    //   // charsClass: "charsChild",
    // });
    let SplitClient = new SplitText(text, {
      type: "chars",
      wordsClass: "wordsParent",
      // charsClass: "charsParent",
    });
    let SplitParent = new SplitText(text, {
      type: "chars",
      wordsClass: "wordsChild",
      // charsClass: "charsChild",
    });
    let chars = SplitParent.chars; //an array of all the divs that wrap each character
    gsap.fromTo(
      chars,
      {
        "will-change": "opacity, transform",
        opacity: 0,
      },
      {
        ease: CustomEase.create("custom", "M0,0 C0.782,0 0.324,1 1,1 "),
        opacity: 1,
        rotationX: 0,
        stagger: 0.01,
        scrollTrigger: {
          trigger: ".mission",
          start: "top 100%",
          end: "bottom center-=10%",
          scrub: 0.5,
        },
      }
    );
  });
}

// gsap.to(".step-header", {
//   scrollTrigger: {
//     trigger: ".step-header",
//     pin: true,
//     start: "top 40%",
//     endTrigger: "steps-layout",
//     end: "+=" + stepHeight,
//     scrub: true,
//   },
// });

getTitleHeight();
getHeroHeight();

function start() {
  gsap.delayedCall(0, loaderUp);
  gsap.delayedCall(0, heroAnimation);
  gsap.delayedCall(0, titleAnimation);
  gsap.delayedCall(0, paragraphAnimation);
  gsap.delayedCall(0, scaleProfile);
  gsap.delayedCall(0, perpsectiveText);
  gsap.delayedCall(0, morph);
  gsap.delayedCall(0, animateClients);

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
