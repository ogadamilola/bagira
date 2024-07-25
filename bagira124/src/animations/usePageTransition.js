import { useEffect } from "react";

const usePageTransition = () => {
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
  let loaderDuration = 4.3;

  function updateLoaderText() {
    let progress = Math.round(counter.value);
    $("[progress=text]").text(progress);
  }

  function endLoaderAnimation() {
    $(".transition-bottom").addClass("close");
    setTimeout(() => {
      $(".transition-wrap").addClass("close");
      $(".home-page-trasition").click();
      setTimeout(() => {
        $(".transition").css("display", "none");
      }, 1000);
      setTimeout(() => {
        textLoad();
      }, 200);
    }, 900);
  }

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
  tlLoad.to(counter, {
    value: 100,
    onUpdate: updateLoaderText,
    duration: loaderDuration,
    ease: CustomEase.create("custom", customEase),
  });

  // Depois da animaÃ§Ã£o Scroll
  setTimeout(() => {
    $("body").removeClass("no-scroll-transition");
  }, 3000);

  // On Click
  let transitionTrigger = $(".transition-trigger");
  let introDurationMS = 0;
  let exitDurationMS = 1000;
  let excludedClass = "no-transition";

  // On Link Click
  $("a").on("click", function (e) {
    if (
      $(this).prop("hostname") == window.shop.host &&
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
        window.shop = transitionURL;
      }, exitDurationMS);
    }
  });
  // On Back Button Tap
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.shop.reload();
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
};
export default usePageTransition;
