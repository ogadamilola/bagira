// ImageLoad1.js
import { useEffect } from "react";
import { gsap } from "gsap";

const ImageLoad1 = () => {
  useEffect(() => {
    const loadTarget1 = $(".transition-img.n3");
    gsap
      .fromTo(
        loadTarget1,
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
        {
          paused: true,
          duration: 1,
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
          ease: "power1.inOut",
        }
      )
      .play()
      .delay(1.5);
  }, []);

  return null;
};

const ImageLoad2 = () => {
  useEffect(() => {
    const loadTarget2 = $(".transition-img.n2");
    gsap
      .fromTo(
        loadTarget2,
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
        {
          paused: true,
          duration: 1.2,
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
          ease: "power1.inOut",
        }
      )
      .play()
      .delay(3);
  }, []);

  return null;
};

const ImageLoad3 = () => {
  useEffect(() => {
    const loadTarget3 = $(".transition-img-wrap");
    gsap
      .fromTo(
        loadTarget3,
        { clipPath: "circle(10% at 50% 50%)" },
        {
          paused: true,
          duration: 1.2,
          clipPath: "circle(100% at 50% 50%)",
          ease: "power1.inOut",
        }
      )
      .play()
      .delay(4.5);
  }, []);

  return null;
};

const ImageLoad4 = () => {
  useEffect(() => {
    const loadTarget4 = $(".transition-img.n1");
    gsap
      .to(loadTarget4, {
        paused: true,
        duration: 0.5,
        width: "100%",
        height: "100%",
        ease: "power1.inOut",
      })
      .play()
      .delay(4.5);
  }, []);

  return null;
};

const TextLoad = () => {
  useEffect(() => {
    const textLoad = () => {
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
    };
    textLoad();
  }, []);

  return null;
};

const PageTransition = () => {
  useEffect(() => {
    let counter = { value: 0 };
    const updateLoaderText = () => {
      let progress = Math.round(counter.value);
      $("[progress=text]").text(progress);
    };

    const endLoaderAnimation = () => {
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
    };

    $("body").addClass("no-scroll-transition");
    let tlLoad = gsap.timeline({
      onComplete: endLoaderAnimation,
      onStart: () => {
        $(".transition-trigger").click();
      },
    });
    tlLoad.to(counter, {
      value: 100,
      onUpdate: updateLoaderText,
      duration: 4.3,
      ease: CustomEase.create(
        "custom",
        "M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1"
      ),
    });

    setTimeout(() => {
      $("body").removeClass("no-scroll-transition");
    }, 3000);

    const handleLinkClick = (e) => {
      const transitionTrigger = $(".transition-trigger");
      const excludedClass = "no-transition";
      const exitDurationMS = 1000;

      if (
        $(e.currentTarget).prop("hostname") === window.shop.host &&
        $(e.currentTarget).attr("href").indexOf("#") === -1 &&
        !$(e.currentTarget).hasClass(excludedClass) &&
        $(e.currentTarget).attr("target") !== "_blank" &&
        transitionTrigger.length > 0
      ) {
        e.preventDefault();
        $("body").addClass("no-scroll-transition");
        let transitionURL = $(e.currentTarget).attr("href");
        transitionTrigger.click();
        setTimeout(() => {
          window.shop = transitionURL;
        }, exitDurationMS);
      }
    };

    $("a").on("click", handleLinkClick);

    window.onpageshow = (event) => {
      if (event.persisted) {
        window.shop.reload();
      }
    };

    setTimeout(() => {
      $(window).on("resize", () => {
        setTimeout(() => {
          $(".transition").css("display", "none");
        }, 50);
      });
    }, 0);

    return () => {
      $("a").off("click", handleLinkClick);
    };
  }, []);

  return null;
};
