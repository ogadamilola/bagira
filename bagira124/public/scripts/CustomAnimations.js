// Page Transition  ----------
// Image Load Animation
let loadTarget4 = $(".transition-img.n1");
let loadTarget1 = $(".transition-img.n3");
let loadTarget2 = $(".transition-img.n2");
let loadTarget3 = $(".transition-img-wrap");
let loadImage1 = gsap.fromTo(
  loadTarget1,
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", //"circle(0% at 50% 50%)"
  },
  {
    paused: true,
    duration: 1,
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", //"circle(100% at 50% 50%)",
    ease: "power1.inOut",
  }
);
let loadImage2 = gsap.fromTo(
  loadTarget2,
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  {
    paused: true,
    duration: 1.2,
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    ease: "power1.inOut",
  }
);
let loadImage3 = gsap.fromTo(
  loadTarget3,
  {
    clipPath: "circle(10% at 50% 50%)",
  },
  {
    paused: true,
    duration: 1.2,
    clipPath: "circle(100% at 50% 50%)",
    ease: "power1.inOut",
  }
);
let loadInicioMask = gsap.fromTo(
  loadTarget3,
  {
    clipPath: "circle(0% at 50% 50%)",
  },
  {
    paused: true,
    duration: 1.2,
    clipPath: "circle(10% at 50% 50%)",
    ease: "power1.inOut",
  }
);
let loadImage4 = gsap.to(loadTarget4, {
  paused: true,
  duration: 0.5,
  width: "100%",
  height: "100%",
  ease: "power1.inOut",
});

// NEW TEXT LOAD
function textLoad() {
  let targetElement = $("[load=anim]").find(".chars");
  $("[load=anim]").each(function (index) {
    let tload = gsap.timeline({});
    tload.to(targetElement, {
      opacity: 1,
      duration: 1,
      stagger: {
        amount: 0.8,
        ease: "none",
        from: "random",
      },
    });
  });
}
// variables
let customEase =
  "M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1";
let counter = {
  value: 0,
};
let loaderDuration = 4.3; // Set this duration according to your page load time

function updateLoaderText() {
  let progress = Math.round(counter.value);
  $("[progress=text]").text(progress);
}

// Function to end the loader animation
function endLoaderAnimation() {
  $(".transition-bottom").addClass("close");
  setTimeout(() => {
    $(".transition-wrap").addClass("close");
    $(".home-page-transition").click();
    setTimeout(() => {
      $(".transition").css("display", "none");
    }, 1000);
    setTimeout(() => {
      textLoad(); // Call any text animations after the loader
    }, 200);
  }, 900);
}

// Check if the current page is the homepage
if (
  window.location.pathname === "/" ||
  window.location.pathname === "/index.html"
) {
  $("body").addClass("no-scroll-transition");
  let tlLoad = gsap.timeline({
    onComplete: endLoaderAnimation,
    onStart: () => {
      $(".transition-trigger").click();
      loadInicioMask.play().delay(0);
      loadImage1.play().delay(1.5);
      loadImage2.play().delay(3);
      loadImage3.play().delay(4.5);
      loadImage4.play().delay(4.5);
    },
  });
  // Animate the counter from 0 to 100 over the duration of the page load
  tlLoad.to(counter, {
    value: 100,
    onUpdate: updateLoaderText,
    duration: loaderDuration,
    ease: "power1.inOut", // You can adjust the easing as needed
  });

  // Optional: Remove the no-scroll class after the transition completes
  setTimeout(() => {
    $("body").removeClass("no-scroll-transition");
  }, 3000); // Adjust timing based on your animation needs
} else {
  // For non-homepage, just run the text load animation
  textLoad();
}

// On Click
let transitionTrigger = $(".transition-trigger");
let introDurationMS = 0;
let exitDurationMS = 1000;
let excludedClass = "no-transition";

// On Link Click
$("a").on("click", function (e) {
  if (
    $(this).prop("hostname") == window.location.host &&
    $(this).attr("href").indexOf("#") === -1 &&
    !$(this).hasClass(excludedClass) &&
    $(this).attr("target") !== "_blank" &&
    transitionTrigger.length > 0
  ) {
    e.preventDefault();
    $("body").addClass("no-scroll-transition");
    let transitionURL = $(this).attr("href");
    transitionTrigger.click();
    setTimeout(function () {
      window.location = transitionURL;
    }, exitDurationMS);
  }
});
// On Back Button Tap
window.onpageshow = function (event) {
  if (event.persisted) {
    window.location.reload();
  }
};
// Hide Transition on Window Width Resize
setTimeout(() => {
  $(window).on("resize", function () {
    setTimeout(() => {
      $(".transition").css("display", "none");
    }, 50);
  });
}, introDurationMS);
// End Page Transition ----------

// Global Links - Global CODE ------------
// Link Politica Privacidade EN
let linkPrivacidadeEN = $("#privacidade").attr("href");
$("[privacy=link]").attr("href", linkPrivacidadeEN);
// Link Politica Privacidade PT
let linkPrivacidadePT = $("#privacidadePT").attr("href");
$("[privacidade=link]").attr("href", linkPrivacidadePT);
// END Global Links - Global CODE ------------

// MOUSE GSAP ----------
gsap.set(".mouse-anda", { xPercent: -50, yPercent: -50 });
const ball = document.querySelector(".mouse-anda");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.2;
const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");
window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});
gsap.ticker.add(() => {
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});
// END MOUSE GSAP ----------
// Mouse Anda 2
gsap.set(".mouse-outro", { xPercent: -50, yPercent: -50 });
const ball2 = document.querySelector(".mouse-outro");
const pos2 = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse2 = { x: pos.x, y: pos.y };
const speed2 = 0.15;
const xSet2 = gsap.quickSetter(ball2, "x", "px");
const ySet2 = gsap.quickSetter(ball2, "y", "px");
window.addEventListener("mousemove", (e) => {
  mouse2.x = e.x;
  mouse2.y = e.y;
});
gsap.ticker.add(() => {
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed2, gsap.ticker.deltaRatio());
  pos2.x += (mouse2.x - pos2.x) * dt;
  pos2.y += (mouse2.y - pos2.y) * dt;
  xSet2(pos2.x);
  ySet2(pos2.y);
});
// END Mouse Anda 2
// Mouse Anda 3
gsap.set(".mouse-outro-2", { xPercent: -50, yPercent: -50 });
const ball3 = document.querySelector(".mouse-outro-2");
const pos3 = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse3 = { x: pos.x, y: pos.y };
const speed3 = 0.17;
const xSet3 = gsap.quickSetter(ball3, "x", "px");
const ySet3 = gsap.quickSetter(ball3, "y", "px");
window.addEventListener("mousemove", (e) => {
  mouse3.x = e.x;
  mouse3.y = e.y;
});
gsap.ticker.add(() => {
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed3, gsap.ticker.deltaRatio());
  pos3.x += (mouse3.x - pos3.x) * dt;
  pos3.y += (mouse3.y - pos3.y) * dt;
  xSet3(pos3.x);
  ySet3(pos3.y);
});
// END Mouse Anda 3

// MOUSE
$(
  ".cta, .big-cta, .pages-big-cta, .murals-button, .about-hover-text, .form-botton, .bagira-link, .inquire-open-info-links, .c-form_field, .form-accept, .decline, .cookies-link"
)
  .not(".nav-link, .small-links")
  .mouseenter(function () {
    $(".mouse").addClass("hover");
    $(".mouse-outro").addClass("hover");
    $(".mouse-outro-2").addClass("hover");
  });
$(
  ".cta, .big-cta, .pages-big-cta, .murals-button, .about-hover-text, .form-botton, .bagira-link, .inquire-open-info-links, .c-form_field, .form-accept, .decline, .cookies-link"
)
  .not(".nav-link, .small-links")
  .mouseleave(function () {
    $(".mouse").removeClass("hover");
    $(".mouse-outro").removeClass("hover");
    $(".mouse-outro-2").removeClass("hover");
  });
$(".nav-link, .small-links, .accept").mouseenter(function () {
  $(".mouse").addClass("nav-hover");
  $(".mouse-outro").addClass("nav-hover");
  $(".mouse-outro-2").addClass("nav-hover");
});
$(".nav-link, .small-links, .accept").mouseleave(function () {
  $(".mouse").removeClass("nav-hover");
  $(".mouse-outro").removeClass("nav-hover");
  $(".mouse-outro-2").removeClass("nav-hover");
});
$(".ap-img-1, .ap-img-center, .ap-img-4").mouseenter(function () {
  $(".mouse-outro").addClass("nav-hover");
  $(".mouse-outro-2").addClass("nav-hover");
});
$(".ap-img-1, .ap-img-center, .ap-img-4").mouseleave(function () {
  $(".mouse-outro").removeClass("nav-hover");
  $(".mouse-outro-2").removeClass("nav-hover");
});
$(
  ".ap-img-full-screen-1, .ap-img-full-screen-2, .ap-img-full-screen-3, .ap-img-full-screen-4"
).mouseenter(function () {
  $(".ap-img-full-close").addClass("close");
  $(".mouse-wrap").addClass("close");
  $(".glass-block").addClass("expand");
  $(".mouse").addClass("nav-hover");
  $(".mouse-outro").addClass("nav-hover");
  $(".mouse-outro-2").addClass("nav-hover");
});
$(
  ".ap-img-full-screen-1, .ap-img-full-screen-2, .ap-img-full-screen-3, .ap-img-full-screen-4"
).mouseleave(function () {
  $(".ap-img-full-close").removeClass("close");
  $(".mouse-wrap").removeClass("close");
  $(".glass-block").removeClass("expand");
  $(".mouse").removeClass("nav-hover");
  $(".mouse-outro").removeClass("nav-hover");
  $(".mouse-outro-2").removeClass("nav-hover");
});
$(".ap-img-1, .ap-img-50, .ap-img-4").mouseenter(function () {
  $(".mouse").addClass("expand");
  $(".mouse-wrap").addClass("expand");
  $(".expand-text").addClass("expand");
  $(".expand-text-none").addClass("expand");
  $(".glass-block").addClass("expand");
});
$(".ap-img-1, .ap-img-50, .ap-img-4").mouseleave(function () {
  $(".mouse").removeClass("expand");
  $(".mouse-wrap").removeClass("expand");
  $(".expand-text").removeClass("expand");
  $(".expand-text-none").removeClass("expand");
  $(".glass-block").removeClass("expand");
});
$(
  ".about-section, .artwork-section, .candc-section, .shop-section, .location-section, .murals-section, .hero-scroll, .murals-component, .about-page, .artwork-page, .collection-page, .shop-page, .page-section"
).mouseenter(function () {
  $(".mouse, .mouse-outro, .mouse-outro-2").addClass("black");
});
$(".hero-scroll").mouseleave(function () {
  $(".mouse, .mouse-outro, .mouse-outro-2").removeClass("black");
});
$(
  ".gallery-section, .gallery-circle-section, .hero-section, .inquire-open, .inquire-section"
).mouseenter(function () {
  $(".mouse, .mouse-outro, .mouse-outro-2").removeClass("black");
});
// Add class on mouse down
$("body").mousedown(function () {
  $(".mouse").addClass("pressed");
});
$("body").mouseup(function () {
  $(".mouse").removeClass("pressed");
});
// END MOUSE

// HORIZONTAL SCROLL ----------
let horizontalM = gsap.matchMedia();
horizontalM.add("(min-width: 991px)", () => {
  // Optional - Set sticky section heights based on inner content width
  // Makes scroll timing feel more natural
  function setTrackHeights() {
    $(".section-height").each(function (index) {
      let trackWidth = $(this).find(".track").outerWidth();
      $(this).height(trackWidth);
    });
  }
  setTrackHeights();
  window.addEventListener("resize", function () {
    setTrackHeights();
  });

  // Horizontal scroll
  let tlMain = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".section-height",
        start: "top top",
        end: "98% bottom", //"+=15000" "98% bottom"
        scrub: 3,
      },
    })
    .to(".track", {
      xPercent: -100,
      ease: "none",
    });

  // SCROLL TO sections
  function handleNavLinkClick(e) {
    e.preventDefault();
    const clickedLink = this;
    const targetSection = clickedLink.getAttribute("href").split("#")[1];

    // If not on homepage, go to homepage with a parameter
    if (
      window.location.pathname !== "/" &&
      window.location.pathname !== "/index.html"
    ) {
      window.location.href = "/?scrollTo=" + targetSection;
    } else {
      // If already on homepage, just scroll to the section
      scrollToSection(clickedLink);
    }
  }

  document
    .querySelectorAll(
      ".nav-link.home, .cta-link.home, .nav-link.about, .big-cta.about, .big-cta.home, .cta-link.about, .nav-link.artwork, .cta-link.artwork, .nav-link.shop, .cta-link.shop, .nav-link.gallery, .cta-link.gallery, .nav-link.location, .cta-link.location, .nav-link.murals, .cta-link.murals"
    )
    .forEach((element) => {
      element.addEventListener("click", handleNavLinkClick);
    });

  function scrollToSection(clickedLink) {
    let scrollContainer = document.querySelector(".track");
    const id = clickedLink.getAttribute("href").split("#")[1];
    const targetElement = document.getElementById(id);

    // Determine the appropriate divisor based on the section
    let divisor;
    if (clickedLink.classList.contains("home")) divisor = 0;
    else if (
      clickedLink.classList.contains("about") ||
      clickedLink.classList.contains("artwork")
    )
      divisor = 15;
    else if (clickedLink.classList.contains("shop")) divisor = 30;
    else if (
      clickedLink.classList.contains("gallery") ||
      clickedLink.classList.contains("location")
    )
      divisor = 20;
    else if (clickedLink.classList.contains("murals")) divisor = 12;
    else divisor = 15; // default value

    const element2 = targetElement.offsetWidth / divisor;

    const scrollToHere =
      (targetElement.offsetLeft + element2) /
      (scrollContainer.scrollWidth /
        (scrollContainer.scrollWidth - window.innerWidth));

    gsap.to(window, {
      scrollTo: scrollToHere,
      duration: 2,
    });
  }

  // // SCROLL TO home
  // document
  //   .querySelectorAll(".nav-link.home, .cta-link.home")
  //   .forEach((element) => {
  //     element.addEventListener("click", function (e) {
  //       e.preventDefault();
  //       let scrollContainer = document.querySelector(".track");
  //       const id = this.getAttribute("href").split("#")[1];

  //       const targetElement = document.getElementById(id);
  //       const element2 = targetElement.offsetWidth / 0;

  //       const scrollToHere =
  //         (targetElement.offsetLeft + element2) /
  //         (scrollContainer.scrollWidth /
  //           (scrollContainer.scrollWidth - window.innerWidth));

  //       console.log(scrollToHere);
  //       console.log(element2);

  //       gsap.to(window, {
  //         scrollTo: scrollToHere,
  //         duration: 2,
  //       });
  //     });
  //   });
  // // SCROLL TO about
  // document
  //   .querySelectorAll(".nav-link.about, .big-cta, .cta-link.about")
  //   .forEach((element) => {
  //     element.addEventListener("click", function (e) {
  //       e.preventDefault();
  //       let scrollContainer = document.querySelector(".track");
  //       const id = this.getAttribute("href").split("#")[1];

  //       const targetElement = document.getElementById(id);
  //       const element2 = targetElement.offsetWidth / 15;

  //       const scrollToHere =
  //         (targetElement.offsetLeft + element2) /
  //         (scrollContainer.scrollWidth /
  //           (scrollContainer.scrollWidth - window.innerWidth));

  //       console.log(scrollToHere);
  //       console.log(element2);

  //       gsap.to(window, {
  //         scrollTo: scrollToHere,
  //         duration: 2,
  //       });
  //     });
  //   });
  // // SCROLL TO artwork
  // document
  //   .querySelectorAll(".nav-link.artwork, .cta-link.artwork")
  //   .forEach((element) => {
  //     element.addEventListener("click", function (e) {
  //       e.preventDefault();
  //       let scrollContainer = document.querySelector(".track");
  //       const id = this.getAttribute("href").split("#")[1];

  //       const targetElement = document.getElementById(id);
  //       const element2 = targetElement.offsetWidth / 15;

  //       const scrollToHere =
  //         (targetElement.offsetLeft + element2) /
  //         (scrollContainer.scrollWidth /
  //           (scrollContainer.scrollWidth - window.innerWidth));

  //       console.log(scrollToHere);
  //       console.log(element2);

  //       gsap.to(window, {
  //         scrollTo: scrollToHere,
  //         duration: 2,
  //       });
  //     });
  //   });
  // // SCROLL TO shop
  // document
  //   .querySelectorAll(".nav-link.shop, .cta-link.shop")
  //   .forEach((element) => {
  //     element.addEventListener("click", function (e) {
  //       e.preventDefault();
  //       let scrollContainer = document.querySelector(".track");
  //       const id = this.getAttribute("href").split("#")[1];

  //       const targetElement = document.getElementById(id);
  //       const element2 = targetElement.offsetWidth / 30;

  //       const scrollToHere =
  //         (targetElement.offsetLeft + element2) /
  //         (scrollContainer.scrollWidth /
  //           (scrollContainer.scrollWidth - window.innerWidth));

  //       console.log(scrollToHere);
  //       console.log(element2);

  //       gsap.to(window, {
  //         scrollTo: scrollToHere,
  //         duration: 2,
  //       });
  //     });
  //   });
  // // SCROLL TO gallery
  // document
  //   .querySelectorAll(".nav-link.gallery, .cta-link.gallery")
  //   .forEach((element) => {
  //     element.addEventListener("click", function (e) {
  //       e.preventDefault();
  //       let scrollContainer = document.querySelector(".track");
  //       const id = this.getAttribute("href").split("#")[1];

  //       const targetElement = document.getElementById(id);
  //       const element2 = targetElement.offsetWidth / 20;

  //       const scrollToHere =
  //         (targetElement.offsetLeft + element2) /
  //         (scrollContainer.scrollWidth /
  //           (scrollContainer.scrollWidth - window.innerWidth));

  //       console.log(scrollToHere);
  //       console.log(element2);

  //       gsap.to(window, {
  //         scrollTo: scrollToHere,
  //         duration: 2,
  //       });
  //     });
  //   });
  // // SCROLL TO location
  // document
  //   .querySelectorAll(".nav-link.location, .cta-link.location")
  //   .forEach((element) => {
  //     element.addEventListener("click", function (e) {
  //       e.preventDefault();
  //       let scrollContainer = document.querySelector(".track");
  //       const id = this.getAttribute("href").split("#")[1];

  //       const targetElement = document.getElementById(id);
  //       const element2 = targetElement.offsetWidth / 20;

  //       const scrollToHere =
  //         (targetElement.offsetLeft + element2) /
  //         (scrollContainer.scrollWidth /
  //           (scrollContainer.scrollWidth - window.innerWidth));

  //       console.log(scrollToHere);
  //       console.log(element2);

  //       gsap.to(window, {
  //         scrollTo: scrollToHere,
  //         duration: 2,
  //       });
  //     });
  //   });
  // // SCROLL TO murals
  // document
  //   .querySelectorAll(".nav-link.murals, .cta-link.murals")
  //   .forEach((element) => {
  //     element.addEventListener("click", function (e) {
  //       e.preventDefault();
  //       let scrollContainer = document.querySelector(".track");
  //       const id = this.getAttribute("href").split("#")[1];

  //       const targetElement = document.getElementById(id);
  //       const element2 = targetElement.offsetWidth / 12;

  //       const scrollToHere =
  //         (targetElement.offsetLeft + element2) /
  //         (scrollContainer.scrollWidth /
  //           (scrollContainer.scrollWidth - window.innerWidth));

  //       console.log(scrollToHere);
  //       console.log(element2);

  //       gsap.to(window, {
  //         scrollTo: scrollToHere,
  //         duration: 2,
  //       });
  //     });
  //   });

  // Animations ______
  // Check if the current page is the homepage
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
  ) {
    // Nav Color 1
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about-section",
          containerAnimation: tlMain,
          start: "left 50%",
          end: "right left",
          toggleActions: "play none none reverse",
          //markers: true
        },
      })
      .to(".nav", { color: "#120902", duration: 0.3, ease: "none" })
      .to(
        ".nav-ball",
        { backgroundColor: "#120902", duration: 0.3, ease: "none" },
        0
      );
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".artwork-full-section",
          containerAnimation: tlMain,
          start: "left 50%",
          end: "right left",
          toggleActions: "play none none reverse",
          //markers: true
        },
      })
      .to(".nav", { color: "#120902", duration: 0.3, ease: "none" })
      .to(
        ".nav-ball",
        { backgroundColor: "#120902", duration: 0.3, ease: "none" },
        0
      );
    // Nav Color 2
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".gallery-section",
          containerAnimation: tlMain,
          start: "left 50%",
          end: "right left",
          toggleActions: "play none none reverse",
          //markers: true
        },
      })
      .to(".nav", { color: "white", duration: 0.3, ease: "none" })
      .to(
        ".nav-ball",
        { backgroundColor: "white", duration: 0.3, ease: "none" },
        0
      );
    // Nav Color 3
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".location-section",
          containerAnimation: tlMain,
          start: "left 50%",
          end: "right left",
          toggleActions: "play none none reverse",
          //markers: true
        },
      })
      .to(".nav", { color: "#120902", duration: 0.3, ease: "none" })
      .to(
        ".nav-ball",
        { backgroundColor: "#120902", duration: 0.3, ease: "none" },
        0
      );
  } else {
    // Nav Color for additional pages
    gsap.set(".nav", { color: "white", mixBlendMode: "difference" });
    gsap.set(".nav-ball", { backgroundColor: "white" });

    // Remove horizontal scroll functionality
    // You may need to remove or adjust other horizontal scroll related code as well
  }

  // NAV BALLS
  // Check if we're on the homepage
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
  ) {
    const navConfig = [
      { id: "#nav-home", trigger: ".hero-section" },
      { id: "#nav-about", trigger: ".about-section" },
      { id: "#nav-artwork", trigger: ".artwork-full-section" },
      { id: "#nav-gallery", trigger: ".gallery-full-section" },
      { id: "#nav-shop", trigger: ".shop-section" },
      { id: "#nav-location", trigger: ".location-section" },
      { id: "#nav-murals", trigger: ".murals-section" },
    ];

    navConfig.forEach(({ id, trigger }) => {
      const navBall = $(id).find(".nav-ball");

      // Scroll-triggered animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: trigger,
            containerAnimation: tlMain,
            start: "left left",
            end: "right left",
            toggleActions: "play reverse play reverse",
          },
        })
        .fromTo(id, { pointerEvents: "auto" }, { pointerEvents: "none" })
        .to(
          navBall,
          { x: "-100%", opacity: 1, duration: 0.35, ease: "power1.out" },
          0
        );

      // Click event for setting pointer events
      $(id).on("click", function () {
        $(".nav-link").css("pointer-events", "auto");
        setTimeout(() => {
          $(this).css("pointer-events", "none");
        }, 100);
      });
    });
  } else {
    const currentPath = window.location.pathname;
    const pageToNavMap = {
      "/about": "#nav-about",
      "/artwork": "#nav-artwork",
      "/gallery": "#nav-gallery",
      "/shop": "#nav-shop",
      "/location": "#nav-location",
      "/murals": "#nav-murals",
    };

    const relevantNavId = pageToNavMap[currentPath];
    if (relevantNavId) {
      const navItem = $(relevantNavId);
      const navBall = navItem.find(".nav-ball");

      // Add a class to indicate this is the current page
      navItem.addClass("current-page");

      // Immediately play the GSAP animation for this nav item
      gsap.to(navBall, {
        x: "-100%",
        opacity: 1,
        duration: 0.35,
        ease: "power1.out",
      });

      // Disable pointer events
      navItem.css("pointer-events", "none");
    }
  }
  // EXPAND IMAGE ----------
  // Z-INDEX
  $(".ap-img-a-1, .ap-img-a-2, .ap-img-a-3, .ap-img-a-4").on(
    "click",
    function () {
      $(".ap-img-a-1, .ap-img-a-2, .ap-img-a-3, .ap-img-a-4").css(
        "z-index",
        "2"
      );
      $(this).css("z-index", "20");
    }
  );
  // Animation FLIP
  const img1 = $(".ap-img-a-1");
  const img1back = $(".ap-img-full-screen-1");
  function doFlip() {
    // Get the initial state
    const state = Flip.getState(img1);
    // Animate from the initial state to the end state
    $(".ap-img-full-screen-1").addClass("visible");
    Flip.from(state, {
      duration: 1,
      targets: ".ap-img-full-screen-1",
      absolute: true,
      zIndex: 1100,
      ease: "power2.inOut",
    });
  }
  function backFlip() {
    // Get the initial state
    const state = Flip.getState(img1back);
    $(".ap-img-full-screen-1").removeClass("visible");
    // Animate from the initial state to the end state
    Flip.from(state, {
      duration: 1,
      targets: ".ap-img-a-1",
      absolute: true,
      zIndex: 1100,
      ease: "power2.inOut",
    });
  }
  // click anywhere to flip
  $(".ap-img-a-1").on("click", function () {
    $("body").addClass("no-scroll-transition");
    doFlip();
  });
  $(".ap-img-full-screen-1").on("click", function () {
    $("body").removeClass("no-scroll-transition");
    backFlip();
  });
  // EXPAND IMAGE
  const img2 = $(".ap-img-a-2");
  const img2back = $(".ap-img-full-screen-2");
  function doFlip2() {
    // Get the initial state
    const state = Flip.getState(img2);
    // Animate from the initial state to the end state
    $(".ap-img-full-screen-2").addClass("visible");
    Flip.from(state, {
      duration: 1,
      targets: ".ap-img-full-screen-2",
      absolute: true,
      zIndex: 1100,
      ease: "power2.inOut",
    });
  }
  function backFlip2() {
    // Get the initial state
    const state = Flip.getState(img2back, { props: "z, index" });
    $(".ap-img-full-screen-2").removeClass("visible");
    // Animate from the initial state to the end state
    Flip.from(state, {
      duration: 1,
      targets: ".ap-img-a-2",
      absolute: true,
      zIndex: 1100,
      ease: "power2.inOut",
    });
  }
  // click anywhere to flip
  $(".ap-img-a-2").on("click", function () {
    $("body").addClass("no-scroll-transition");
    doFlip2();
  });
  $(".ap-img-full-screen-2").on("click", function () {
    $("body").removeClass("no-scroll-transition");
    backFlip2();
  });
  // EXPAND IMAGE
  const img3 = $(".ap-img-a-3");
  const img3back = $(".ap-img-full-screen-3");
  function doFlip3() {
    // Get the initial state
    const state = Flip.getState(img3);
    // Animate from the initial state to the end state
    $(".ap-img-full-screen-3").addClass("visible");
    Flip.from(state, {
      duration: 1,
      targets: ".ap-img-full-screen-3",
      absolute: true,
      zIndex: 1100,
      ease: "power2.inOut",
    });
  }
  function backFlip3() {
    // Get the initial state
    const state = Flip.getState(img3back, { props: "z, index" });
    $(".ap-img-full-screen-3").removeClass("visible");
    // Animate from the initial state to the end state
    Flip.from(state, {
      duration: 1,
      targets: ".ap-img-a-3",
      absolute: true,
      zIndex: 1100,
      ease: "power2.inOut",
    });
  }
  // click anywhere to flip
  $(".ap-img-a-3").on("click", function () {
    $("body").addClass("no-scroll-transition");
    doFlip3();
  });
  $(".ap-img-full-screen-3").on("click", function () {
    $("body").removeClass("no-scroll-transition");
    backFlip3();
  });
  // EXPAND IMAGE
  const img4 = $(".ap-img-a-4");
  const img4back = $(".ap-img-full-screen-4");
  function doFlip4() {
    // Get the initial state
    const state = Flip.getState(img4);
    // Animate from the initial state to the end state
    $(".ap-img-full-screen-4").addClass("visible");
    Flip.from(state, {
      duration: 1,
      targets: ".ap-img-full-screen-4",
      absolute: true,
      zIndex: 1100,
      ease: "power2.inOut",
    });
  }
  function backFlip4() {
    // Get the initial state
    const state = Flip.getState(img4back, { props: "z, index" });
    $(".ap-img-full-screen-4").removeClass("visible");
    // Animate from the initial state to the end state
    Flip.from(state, {
      duration: 1,
      targets: ".ap-img-a-4",
      absolute: true,
      zIndex: 1100,
      ease: "power2.inOut",
    });
  }
  // click anywhere to flip
  $(".ap-img-a-4").on("click", function () {
    $("body").addClass("no-scroll-transition");
    doFlip4();
  });
  $(".ap-img-full-screen-4").on("click", function () {
    $("body").removeClass("no-scroll-transition");
    backFlip4();
  });
  // END EXPAND IMAGE
  // THE GALLERY ------
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".gallery-section",
        containerAnimation: tlMain,
        start: "left left",
        end: "right right",
        scrub: true,
        //markers: true
      },
    })
    .to(".gallery-component", { xPercent: 100, ease: "none" });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".gallery-section",
        containerAnimation: tlMain,
        start: "10% left",
        end: "right right",
        scrub: true,
        //toggleActions: "play none none reverse",
        //markers: true
      },
    })
    .to(".gallery-background-video", {
      width: "100%",
      height: "100%",
      marginTop: 0,
    });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".gallery-section",
        containerAnimation: tlMain,
        start: "10% left",
        end: "20% left",
        scrub: true,
        //toggleActions: "play none none reverse",
        //markers: true
      },
    })
    .to(".gallery-top", {
      y: "-50%",
      rotationX: "60_cw",
      opacity: 0,
      ease: "none",
    })
    .to(
      ".gallery-bottom",
      { y: "50%", rotationX: "-60_ccw", opacity: 0, ease: "none" },
      0
    );
  // END THE GALLERY
  // LOCATION ------
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".location-trigger",
        containerAnimation: tlMain,
        start: "left left",
        end: "right right",
        scrub: true,
        //markers: true
      },
    })
    .to(".location-sticky", { x: "100vw", ease: "none" })
    .to(".location-update-line", { height: "100%", ease: "none" }, 0);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".location-trigger",
        containerAnimation: tlMain,
        start: "18% left",
        end: "right right",
        //scrub: true,
        toggleActions: "play none none reverse",
        //markers: true
      },
    })
    .to(".location-info-wrap.n1", {
      //scale: 0.5,
      opacity: 0,
      ease: "power1.inOut",
      duration: 1,
    })
    .to(
      ".location-info-wrap.n2",
      { scale: 1, opacity: 1, ease: "power1.inOut", duration: 1 },
      0.5
    );
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".location-trigger",
        containerAnimation: tlMain,
        start: "36% left",
        end: "right right",
        //scrub: true,
        toggleActions: "play none none reverse",
        //markers: true
      },
    })
    .to(".location-info-wrap.n2", {
      //scale: 0.5,
      opacity: 0,
      ease: "power1.inOut",
      duration: 1,
    })
    .to(
      ".location-info-wrap.n3",
      { scale: 1, opacity: 1, ease: "power1.inOut", duration: 1 },
      0.5
    );
  // END LOCATION
  // MURALS ------
  var trackHeight = $(this).outerHeight();
  function setAvailabityHeights() {
    $(".scroll-track").each(function (index) {
      trackHeight = $(this).outerHeight();
      //$(this).height(trackHeight);
    });
  }
  setAvailabityHeights();
  window.addEventListener("resize", function () {
    setAvailabityHeights();
  });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".murals-section",
        containerAnimation: tlMain,
        start: "left left",
        end: "right right",
        scrub: true,
        //markers: true
      },
    })
    .to(".murals-anda", { x: "100vw", ease: "none" });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".murals-scroll-absolute",
        containerAnimation: tlMain,
        start: "left left",
        end: "right right",
        scrub: true,
        //markers: true
      },
    })
    .to(".scroll-track", { y: "-" + trackHeight, ease: "none" });
  // END MURALS
  // TEXT ANIMATION -----------
  $("[anim=1]").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".chars");
    let tlwords = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        containerAnimation: tlMain,
        start: "0% right-=150",
        end: "right right",
        //markers: true,
        toggleActions: "play none none reverse",
      },
    });
    tlwords.from(targetElement, {
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.8,
        ease: "none",
        from: "random",
      },
    });
  });

  // END Title
  // IMAGEM APARECE
  $(".about-img-wrap").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this);
    let castanho = $(this).siblings(".about-img-brown");
    let tlImg = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        containerAnimation: tlMain,
        start: "0% right-=150",
        end: "right right",
        //markers: true,
        toggleActions: "play none none reverse",
      },
    });
    tlImg.fromTo(
      castanho,
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      },
      {
        duration: 0.7,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power1.out",
      }
    );
    tlImg.fromTo(
      targetElement,
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      },
      {
        duration: 0.7,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power1.out",
      },
      0.5
    );
  });

  // END TEXT ANIMATION -----------
  // IMAGE PARALLAX -------
  // Hero Image
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        containerAnimation: tlMain,
        start: "left left",
        end: "right left",
        scrub: true,
        //markers: true
      },
    })
    .fromTo(".hero-img-background", { x: "0%" }, { x: "30%" });
  // GALLERY Image
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".gallery-section",
        containerAnimation: tlMain,
        start: "50% left",
        end: "right left",
        scrub: true,
        //markers: true
      },
    })
    .fromTo(".gallery-background-video", { x: "0%" }, { x: "30%" });
  // LOCATION Image
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".location-section",
        containerAnimation: tlMain,
        start: "40% left",
        end: "right left",
        scrub: true,
        //markers: true
      },
    })
    .fromTo(".location-big-img", { x: "-20%" }, { x: "20%" });
  // FOOTER
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".murals-section",
        containerAnimation: tlMain,
        start: "25% left",
        end: "right 99%",
        scrub: true,
        //markers: true
      },
    })
    .from(".inquire-section", { y: "-60%" })
    .from(".inquire-background-img", { y: "30%" }, 0);
  // END IMAGE PARALLAX -------
});
// END HORIZONTAL SCROLL ----------

// Form Floating Label -------
$(".c-text-field").on("focusin", function () {
  $(this).siblings(".form-field-label").addClass("form-field-focused");
  $(this).siblings(".form-field-label").addClass("focused");
});

$(".c-text-field").on("focusout", function () {
  if ($(this).val().length == 0) {
    $(this).siblings(".form-field-label").removeClass("form-field-focused");
    $(this).siblings(".form-field-label").removeClass("focused");
  }
});
// End Form Floating Label -------

// Form Error
$(".c-text-field").removeClass("cc-error");
function errorMessage() {
  if ($(".c-text-field").hasClass("cc-error")) {
    $(".form-please-wrap").addClass("error");
  } else {
    $(".form-please-wrap").removeClass("error");
  }
}
$(".c-form_field, .form-button-wrap").on("mouseenter mouseleave", function () {
  errorMessage();
});
$(".form-botton, .form").on("click", function () {
  setTimeout(() => {
    errorMessage();
  }, 200);
});
// END Form Error

// Inquire Open --------
// NEW TEXT LOAD
function textInquire() {
  let targetElement = $("[inquire=text]").find(".chars");
  $("[inquire=text]").each(function (index) {
    let tload = gsap.timeline({});
    tload.to(targetElement, {
      opacity: 1,
      duration: 1,
      stagger: {
        amount: 0.8,
        ease: "none",
        from: "random",
      },
    });
  });
}
$(".nav-link.inquire, .cta-link.inquire, .inquire-cta-wrap").on(
  "click",
  function () {
    $(".inquire-open").removeClass("close");
    $("body").addClass("no-scroll-transition");
    setTimeout(() => {
      $(".inquire-wrap").removeClass("close");
      setTimeout(() => {
        textInquire();
      }, 600);
    }, 100);
  }
);
$(".nav-link.inquire-close").on("click", function () {
  $(".inquire-wrap").addClass("close");
  $("body").removeClass("no-scroll-transition");
  setTimeout(() => {
    $("[inquire=text]").find(".chars").css("opacity", "0");
    $(".inquire-open").addClass("close");
  }, 1000);
});
// END Inquire Open

// Resize PC to TABLET - TABLET to PC - Reload Site
var pc = window.matchMedia("(min-width: 992px)");
var tabletM = window.matchMedia("(max-width: 991px)");
var pcM;
var tabletV;

function pcSize() {
  if (pc.matches) {
    pcM = true;
  }
}
pcSize();

function tabletSize() {
  if (tabletM.matches) {
    tabletV = true;
  }
}
tabletSize();

$(window).on("resize", function () {
  function tablet() {
    if ((tabletV === true || tabletM.matches) && (pcM === true || pc.matches)) {
      // If media query matches
      location.reload();
      pcM = false;
      tabletV = false;
    }
  }
  tablet();
  pcSize();
  tabletSize();
});
// END Resize PC to TABLET - TABLET to PC - Reload Site

// MOBILE GSAP
horizontalM.add("(max-width: 991px)", () => {
  // Nav Color 1
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top top",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        //markers: true
      },
    })
    .to(".nav", { color: "#120902", duration: 0.3, ease: "none" });
  // Nav Color 2
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".gallery-section",
        start: "top top",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        //markers: true
      },
    })
    .to(".nav", { color: "white", duration: 0.3, ease: "none" });
  // Nav Color 3
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".location-section",
        start: "top top",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        //markers: true
      },
    })
    .to(".nav", { color: "#120902", duration: 0.3, ease: "none" });
  // END MOBILE GSAP
  // TEXT ANIMATION -----------
  $("[anim=1]").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this).find(".chars");
    let tlwords = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 90%",
        end: "bottom bottom",
        //markers: true,
        toggleActions: "play none none reverse",
      },
    });
    tlwords.from(targetElement, {
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.8,
        ease: "none",
        from: "random",
      },
    });
  });
  // LOCATION ------
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".location-section",
        start: "top top",
        end: "80% bottom",
        scrub: true,
        //markers: true
      },
    })
    .to(".location-update-line", { width: "100%", ease: "none" });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".location-section",
        start: "15% top",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        //markers: true
      },
    })
    .to(".location-info-wrap.n1", {
      //scale: 0.5,
      opacity: 0,
      ease: "power1.inOut",
      duration: 1,
    })
    .to(
      ".location-info-wrap.n2",
      { scale: 1, opacity: 1, ease: "power1.inOut", duration: 1 },
      0.5
    );
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".location-section",
        start: "30% top",
        end: "bottom bottom",
        //scrub: true,
        toggleActions: "play none none reverse",
        //markers: true
      },
    })
    .to(".location-info-wrap.n2", {
      //scale: 0.5,
      opacity: 0,
      ease: "power1.inOut",
      duration: 1,
    })
    .to(
      ".location-info-wrap.n3",
      { scale: 1, opacity: 1, ease: "power1.inOut", duration: 1 },
      0.5
    );
  // END LOCATION
  // IMAGE PARALLAX --------
  // Hero
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true
      },
    })
    .fromTo(".hero-img-background", { y: "0%" }, { y: "15%" });
  // END IMAGE PARALLAX --------
});

// Image HOVER Animation
$("#bagira-img, #gallery-img").each(function () {
  // Each define esta function a cada um com esta class
  let targetElement1 = $(".about-img.n1");
  let targetElement2 = $(".about-img.n2");
  let animation1 = gsap.fromTo(
    targetElement1,
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
    {
      paused: true,
      duration: 0.75,
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      ease: "power1.out",
    }
  );
  let animation2 = gsap.fromTo(
    targetElement2,
    {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    },
    {
      paused: true,
      duration: 0.75,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power1.out",
      onComplete: () => {
        animation1gallery.progress(0).pause();
        animation2gallery.progress(0).pause();
      },
    }
  );
  let animation1gallery = gsap.fromTo(
    targetElement2,
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
    {
      paused: true,
      duration: 0.75,
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      ease: "power1.out",
    }
  );
  let animation2gallery = gsap.fromTo(
    targetElement1,
    {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    },
    {
      paused: true,
      duration: 0.75,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power1.out",
      onComplete: () => {
        animation1.progress(0).pause();
        animation2.progress(0).pause();
      },
    }
  );
  // Problemas na animaÃ§Ã£o- facil resoluÃ§Ã£o
  var galleryV = false;

  $("#gallery-img").on("mouseenter", function () {
    if (galleryV === true) {
      animation1.play();
      animation2.play();
    }
  });

  $("#bagira-img").on("mouseenter", function () {
    galleryV = true;
    animation1gallery.play();
    animation2gallery.play();
  });
});
// END Image Hover Animation

// Split animation
gsap.registerPlugin(ScrollTrigger, SplitText, Flip, ScrollToPlugin);
$("[split=words]").each(function (index) {
  $(this).addClass("split-words");
});
$("[split=lines]").each(function (index) {
  $(this).addClass("split-lines");
});
new SplitText(".split-lines", { type: "lines", linesClass: "lineChild" });
new SplitText(".split-lines", { type: "lines", linesClass: "lineParent" });
var mySplitText = new SplitText(".split-words", {
  type: "words,chars",
  wordsClass: "words",
  charsClass: "chars",
});
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}
// END Split animation

!(function (o, c) {
  var n = c.documentElement,
    t = " w-mod-";
  (n.className += t + "js"),
    ("ontouchstart" in o || (o.DocumentTouch && c instanceof DocumentTouch)) &&
      (n.className += t + "touch");
})(window, document);
