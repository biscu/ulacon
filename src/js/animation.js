console.log("animation file is connected");

function getTitleHeight() {
  title = document.querySelector(".h-animated");
  titleHeight = title.offsetHeight;
  console.log("h1 title is " + titleHeight + " px");
}

// Title
function titleAnimation() {
  const targets = gsap.utils.toArray(".h-animated");

  targets.forEach((target) => {
    let SplitClient = new SplitText(target, {
      type: "words",
      wordsClass: "wordsParent",
    });
    let SplitParent = new SplitText(target, {
      type: "words",
      wordsClass: "wordsChild",
    });
    let words = SplitParent.words; //an array of all the divs that wrap each character
    gsap.fromTo(".h-animated", { autoAlpha: 0 }, { autoAlpha: 1 });
    gsap.from(words, {
      duration: 1.2,
      y: titleHeight,
      ease: CustomEase.create("custom", "M0,0,C0.496,0.298,0,1,1,1"),
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
      scrollTrigger: {
        trigger: target,
        markers: false,
        start: "top 100%",
        scrub: false,
      },
    });
  });
}

//TRIGGER CLI BOX UP AND DOWN
// gsap.set(".cli-box", { yPercent: 100, opacity: 1 });
// var tl = gsap.timeline({ paused: true, reversed: true });
// tl.to(".cli-box", {
//   duration: 1,
//   yPercent: 0,
//   ease: CustomEase.create("custom", "M0,0,C0.496,0.298,0,1,1,1"),
//   onComplete: terminal,
// });

// function allowBodyScroll() {
//   var body = document.body;
//   if (body.classList.contains("cantScroll")) {
//     body.classList.remove("cantScroll");
//   } else {
//     body.classList.add("cantScroll");
//   }
// }

// const cliButton = document.getElementById("cli-btn");
// cliButton.addEventListener("click", () => {
//   allowBodyScroll();
//   // var delay = 800;
//   // setTimeout(terminal, delay);
//   tl.reversed() ? tl.play() : tl.reverse();
//   console.log("terminal animated");
// });

getTitleHeight();

gsap.delayedCall(0, titleAnimation);
gsap.delayedCall(0, paragraphAnimation);
