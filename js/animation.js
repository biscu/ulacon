function getTitleHeight() {
  title = document.querySelector(".h-animated");
  titleHeight = title.offsetHeight;
}
function getHeroHeight() {
  hero = document.querySelector(".hero-animated");
  heroHeight = hero.offsetHeight;
}

const ease = CustomEase.create("custom", "M0,0,C0.496,0.298,0,1,1,1");

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
      opacity: 1,
      ease: ease,
      stagger: -0.04,
      scrollTrigger: {
        trigger: target,
        markers: false,
        start: "bottom 40%",
        scrub: true,
      },
    });
    gsap.from(".logo", {
      duration: 1.2,
      yPercent: 40,
      opacity: 0,
      stagger: 0.05,
      delay: 2.8,
      ease: ease,
    });
    gsap.to(".service-wrap", {
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

function dividerAnimation() {
  const targets = gsap.utils.toArray(".divider");

  targets.forEach((target) => {
    gsap.to(target, {
      duration: 1,
      width: "100%",
      ease: ease,
      scrollTrigger: {
        trigger: target,
        markers: false,
        start: "top 100%",
      },
    });
  });
}

function serviceTitle() {
  const targets = gsap.utils.toArray(".s-animated");

  targets.forEach((target) => {
    let SplitClient3 = new SplitText(target, {
      type: "chars",
      charsClass: "wordsParent",
      // charsClass: "charsParent",
    });
    let SplitParent4 = new SplitText(target, {
      type: "chars",
      charsClass: "wordsChild",
      // charsClass: "charsChild",
    });
    let chars = SplitParent4.chars; //an array of all the divs that wrap each character
    gsap.fromTo(".s-animated", { autoAlpha: 0 }, { autoAlpha: 1 });
    gsap.from(chars, {
      duration: 1,
      y: 80,
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

function animateClients2() {
  gsap.to(".client-item2", {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: ease,
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".client-item2",
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

function loaderUp() {
  gsap.to(".loader", {
    duration: 1.4,
    delay: 2,
    yPercent: -100,
    // ease: ease,
    ease: CustomEase.create("custom", "M0,0 C0.782,0 0.324,1 1,1 "),
    // onComplete: start,
  });
}

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

getTitleHeight();
getHeroHeight();

function start() {
  gsap.delayedCall(0, loaderUp);
  gsap.delayedCall(0, heroAnimation);
  gsap.delayedCall(0, titleAnimation);
  gsap.delayedCall(3.4, paragraphAnimation);
  gsap.delayedCall(3.4, dividerAnimation);
  gsap.delayedCall(3.4, serviceTitle);
  gsap.delayedCall(0, scaleProfile);
  gsap.delayedCall(0, animateClients);
  gsap.delayedCall(0, animateClients2);
}

start();
