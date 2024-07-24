"use client";
import Image from "next/image";
import HomeSection from "@/components/HomeSection";
import VisionSection from "@/components/VisionSection";
import ArtworkSection from "@/components/ArtworkSection";
import GallerySection from "@/components/GallerySection";
import ShopSection from "@/components/ShopSection";
import MuralsSection from "@/components/MuralsSection";
import Script from "next/script";
import { useEffect } from "react";
import gsap from "gsap";
import $ from "jquery";
// import { Flip, ScrollToPlugin, ScrollTrigger, SplitText } from "gsap/all";

import useHorizontalScroll from "@/animations/useHorizontalScroll";

export default function Home() {
  useEffect(() => {
    // Iniciar GSAP
    gsap.registerPlugin(ScrollTrigger, SplitText, Flip, ScrollToPlugin);

    // Iniciar Line Split
    $("[split=words]").each(function (index) {
      $(this).addClass("split-words");
    });
    $("[split=lines]").each(function (index) {
      $(this).addClass("split-lines");
    });
    // Iniciar Line Split
    new SplitText(".split-lines", { type: "lines", linesClass: "lineChild" });
    new SplitText(".split-lines", { type: "lines", linesClass: "lineParent" });
    // Splite Words Chars
    var mySplitText = new SplitText(".split-words", {
      type: "words,chars",
      wordsClass: "words",
      charsClass: "chars",
    });

    // Scroll Back To Top On Load -->
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    } else {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }
  }, []);

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
        $(e.currentTarget).prop("hostname") === window.location.host &&
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
          window.location = transitionURL;
        }, exitDurationMS);
      }
    };

    $("a").on("click", handleLinkClick);

    window.onpageshow = (event) => {
      if (event.persisted) {
        window.location.reload();
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

  // Global Links - Global CODE
  useEffect(() => {
    let linkPrivacidadeEN = $("#privacidade").attr("href");
    $("[privacy=link]").attr("href", linkPrivacidadeEN);
    let linkPrivacidadePT = $("#privacidadePT").attr("href");
    $("[privacidade=link]").attr("href", linkPrivacidadePT);

    // MOUSE GSAP
    gsap.set(".mouse-anda", {
      xPercent: -50,
      yPercent: -50,
    });
    const ball = document.querySelector(".mouse-anda");
    const pos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    const mouse = {
      x: pos.x,
      y: pos.y,
    };
    const speed = 0.2;
    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    // Mouse Anda 2
    gsap.set(".mouse-outro", {
      xPercent: -50,
      yPercent: -50,
    });
    const ball2 = document.querySelector(".mouse-outro");
    const pos2 = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    const mouse2 = {
      x: pos.x,
      y: pos.y,
    };
    const speed2 = 0.15;
    const xSet2 = gsap.quickSetter(ball2, "x", "px");
    const ySet2 = gsap.quickSetter(ball2, "y", "px");
    window.addEventListener("mousemove", (e) => {
      mouse2.x = e.x;
      mouse2.y = e.y;
    });
    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed2, gsap.ticker.deltaRatio());
      pos2.x += (mouse2.x - pos2.x) * dt;
      pos2.y += (mouse2.y - pos2.y) * dt;
      xSet2(pos2.x);
      ySet2(pos2.y);
    });

    // Mouse Anda 3
    gsap.set(".mouse-outro-2", {
      xPercent: -50,
      yPercent: -50,
    });
    const ball3 = document.querySelector(".mouse-outro-2");
    const pos3 = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    const mouse3 = {
      x: pos.x,
      y: pos.y,
    };
    const speed3 = 0.17;
    const xSet3 = gsap.quickSetter(ball3, "x", "px");
    const ySet3 = gsap.quickSetter(ball3, "y", "px");
    window.addEventListener("mousemove", (e) => {
      mouse3.x = e.x;
      mouse3.y = e.y;
    });
    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed3, gsap.ticker.deltaRatio());
      pos3.x += (mouse3.x - pos3.x) * dt;
      pos3.y += (mouse3.y - pos3.y) * dt;
      xSet3(pos3.x);
      ySet3(pos3.y);
    });
  }, []);

  // MOUSE
  useEffect(() => {
    $(
      ".cta, .big-cta, .availability-button, .vision-hover-text, .form-botton, .bemine-link, .inquire-open-info-links, .c-form_field, .form-accept, .decline, .cookies-link"
    )
      .not(".nav-link, .small-links")
      .mouseenter(function () {
        $(".mouse").addClass("hover");
        $(".mouse-outro").addClass("hover");
        $(".mouse-outro-2").addClass("hover");
      });
    $(
      ".cta, .big-cta, .availability-button, .vision-hover-text, .form-botton, .bemine-link, .inquire-open-info-links, .c-form_field, .form-accept, .decline, .cookies-link"
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
      ".vision-section, .apartments-section, .location-section, .availability-section, .hero-scroll, .availability-component"
    ).mouseenter(function () {
      $(".mouse, .mouse-outro, .mouse-outro-2").addClass("black");
    });
    $(".hero-scroll").mouseleave(function () {
      $(".mouse, .mouse-outro, .mouse-outro-2").removeClass("black");
    });
    $(
      ".island-section, .hero-section, .inquire-open, .inquire-section"
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

    // Clean up function to remove event listeners when the component is unmounted
    return () => {
      $(
        ".cta, .big-cta, .availability-button, .vision-hover-text, .form-botton, .bemine-link, .inquire-open-info-links, .c-form_field, .form-accept, .decline, .cookies-link"
      ).off("mouseenter mouseleave");
      $(".nav-link, .small-links, .accept").off("mouseenter mouseleave");
      $(".ap-img-1, .ap-img-center, .ap-img-4").off("mouseenter mouseleave");
      $(
        ".ap-img-full-screen-1, .ap-img-full-screen-2, .ap-img-full-screen-3, .ap-img-full-screen-4"
      ).off("mouseenter mouseleave");
      $(".ap-img-1, .ap-img-50, .ap-img-4").off("mouseenter mouseleave");
      $(
        ".vision-section, .apartments-section, .location-section, .availability-section, .hero-scroll, .availability-component"
      ).off("mouseenter mouseleave");
      $(".hero-scroll").off("mouseleave");
      $(".island-section, .hero-section, .inquire-open, .inquire-section").off(
        "mouseenter"
      );
      $("body").off("mousedown mouseup");
    };
  }, []);

  // HORIZONTAL SCROLL ----------
  useEffect(() => {
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
      // SCROLL TO home
      document.querySelectorAll(".nav-link.home").forEach((element) => {
        element.addEventListener("click", function (e) {
          e.preventDefault();
          let scrollContainer = document.querySelector(".track");
          const id = this.getAttribute("href").split("#")[1];

          const targetElement = document.getElementById(id);
          const element2 = targetElement.offsetWidth / 0;

          const scrollToHere =
            (targetElement.offsetLeft + element2) /
            (scrollContainer.scrollWidth /
              (scrollContainer.scrollWidth - window.innerWidth));

          console.log(scrollToHere);
          console.log(element2);

          gsap.to(window, {
            scrollTo: scrollToHere,
            duration: 2,
          });
        });
      });
      // SCROLL TO a
      document.querySelectorAll(".nav-link.a, .big-cta").forEach((element) => {
        element.addEventListener("click", function (e) {
          e.preventDefault();
          let scrollContainer = document.querySelector(".track");
          const id = this.getAttribute("href").split("#")[1];

          const targetElement = document.getElementById(id);
          const element2 = targetElement.offsetWidth / 15;

          const scrollToHere =
            (targetElement.offsetLeft + element2) /
            (scrollContainer.scrollWidth /
              (scrollContainer.scrollWidth - window.innerWidth));

          console.log(scrollToHere);
          console.log(element2);

          gsap.to(window, {
            scrollTo: scrollToHere,
            duration: 2,
          });
        });
      });
      // SCROLL TO d
      document.querySelectorAll(".nav-link.d").forEach((element) => {
        element.addEventListener("click", function (e) {
          e.preventDefault();
          let scrollContainer = document.querySelector(".track");
          const id = this.getAttribute("href").split("#")[1];

          const targetElement = document.getElementById(id);
          const element2 = targetElement.offsetWidth / 50;

          const scrollToHere =
            (targetElement.offsetLeft + element2) /
            (scrollContainer.scrollWidth /
              (scrollContainer.scrollWidth - window.innerWidth));

          console.log(scrollToHere);
          console.log(element2);

          gsap.to(window, {
            scrollTo: scrollToHere,
            duration: 2,
          });
        });
      });
      // SCROLL TO b
      document.querySelectorAll(".nav-link.b").forEach((element) => {
        element.addEventListener("click", function (e) {
          e.preventDefault();
          let scrollContainer = document.querySelector(".track");
          const id = this.getAttribute("href").split("#")[1];

          const targetElement = document.getElementById(id);
          const element2 = targetElement.offsetWidth / 20;

          const scrollToHere =
            (targetElement.offsetLeft + element2) /
            (scrollContainer.scrollWidth /
              (scrollContainer.scrollWidth - window.innerWidth));

          console.log(scrollToHere);
          console.log(element2);

          gsap.to(window, {
            scrollTo: scrollToHere,
            duration: 2,
          });
        });
      });
      // SCROLL TO c
      document
        .querySelectorAll(".nav-link.c, .cta-link.c")
        .forEach((element) => {
          element.addEventListener("click", function (e) {
            e.preventDefault();
            let scrollContainer = document.querySelector(".track");
            const id = this.getAttribute("href").split("#")[1];

            const targetElement = document.getElementById(id);
            const element2 = targetElement.offsetWidth / 12;

            const scrollToHere =
              (targetElement.offsetLeft + element2) /
              (scrollContainer.scrollWidth /
                (scrollContainer.scrollWidth - window.innerWidth));

            console.log(scrollToHere);
            console.log(element2);

            gsap.to(window, {
              scrollTo: scrollToHere,
              duration: 2,
            });
          });
        });

      // Animations ______
      // Nav Color 1
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".vision-section",
            containerAnimation: tlMain,
            start: "left 50%",
            end: "right left",
            toggleActions: "play none none reverse",
            //markers: true
          },
        })
        .to(".nav", {
          color: "#120902",
          duration: 0.3,
          ease: "none",
        })
        .to(
          ".nav-ball",
          {
            backgroundColor: "#120902",
            duration: 0.3,
            ease: "none",
          },
          0
        );
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".apartments-section",
            containerAnimation: tlMain,
            start: "left 50%",
            end: "right left",
            toggleActions: "play none none reverse",
            //markers: true
          },
        })
        .to(".nav", {
          color: "#120902",
          duration: 0.3,
          ease: "none",
        })
        .to(
          ".nav-ball",
          {
            backgroundColor: "#120902",
            duration: 0.3,
            ease: "none",
          },
          0
        );
      // Nav Color 2
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".island-section",
            containerAnimation: tlMain,
            start: "left 50%",
            end: "right left",
            toggleActions: "play none none reverse",
            //markers: true
          },
        })
        .to(".nav", {
          color: "white",
          duration: 0.3,
          ease: "none",
        })
        .to(
          ".nav-ball",
          {
            backgroundColor: "white",
            duration: 0.3,
            ease: "none",
          },
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
        .to(".nav", {
          color: "#120902",
          duration: 0.3,
          ease: "none",
        })
        .to(
          ".nav-ball",
          {
            backgroundColor: "#120902",
            duration: 0.3,
            ease: "none",
          },
          0
        );
      // NAV BALL HOME -------
      let navHome = $("#nav-home").find(".nav-ball");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".hero-section",
            containerAnimation: tlMain,
            start: "left left+=150",
            end: "right left",
            //markers: true,
            toggleActions: "play reverse play reverse",
          },
        })
        .fromTo(
          "#nav-home",
          {
            pointerEvents: "auto",
          },
          {
            pointerEvents: "none",
          }
        )
        .to(
          navHome,
          {
            x: "-100%",
            opacity: 1,
            duration: 0.35,
            ease: "power1.out",
          },
          0
        );
      // Click para a bola ficar no sitio correto
      $("#nav-vision").on("click", function () {
        $(".nav-link").css("pointer-events", "auto");
        setTimeout(() => {
          $(this).css("pointer-events", "none");
        }, 100);
      });
      // NAV BALL VISION -------
      let navVision = $("#nav-vision").find(".nav-ball");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".vision-section",
            containerAnimation: tlMain,
            start: "left left",
            end: "right left",
            //markers: true,
            toggleActions: "play reverse play reverse",
          },
        })
        .fromTo(
          "#nav-vision",
          {
            pointerEvents: "auto",
          },
          {
            pointerEvents: "none",
          }
        )
        .to(
          navVision,
          {
            x: "-100%",
            opacity: 1,
            duration: 0.35,
            ease: "power1.out",
          },
          0
        );
      // Click para a bola ficar no sitio correto
      $("#nav-vision").on("click", function () {
        $(".nav-link").css("pointer-events", "auto");
        setTimeout(() => {
          $(this).css("pointer-events", "none");
        }, 100);
      });
      // NAV BALL APARTMENTS -------
      let navApartments = $("#nav-apartments").find(".nav-ball");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".apartments-section",
            containerAnimation: tlMain,
            start: "left left",
            end: "right left",
            //markers: true,
            toggleActions: "play reverse play reverse",
          },
        })
        .fromTo(
          "#nav-apartments",
          {
            pointerEvents: "auto",
          },
          {
            pointerEvents: "none",
          }
        )
        .to(
          navApartments,
          {
            x: "-100%",
            opacity: 1,
            duration: 0.35,
            ease: "power1.out",
          },
          0
        );
      // Click para a bola ficar no sitio correto
      $("#nav-apartments").on("click", function () {
        $(".nav-link").css("pointer-events", "auto");
        setTimeout(() => {
          $(this).css("pointer-events", "none");
        }, 100);
      });
      // NAV BALL ISLAND -------
      let navIsland = $("#nav-island").find(".nav-ball");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".island-section",
            containerAnimation: tlMain,
            start: "left left",
            end: "right left",
            //markers: true,
            toggleActions: "play reverse play reverse",
          },
        })
        .fromTo(
          "#nav-island",
          {
            pointerEvents: "auto",
          },
          {
            pointerEvents: "none",
          }
        )
        .to(
          navIsland,
          {
            x: "-100%",
            opacity: 1,
            duration: 0.35,
            ease: "power1.out",
          },
          0
        );
      // Click para a bola ficar no sitio correto
      $("#nav-island").on("click", function () {
        $(".nav-link").css("pointer-events", "auto");
        setTimeout(() => {
          $(this).css("pointer-events", "none");
        }, 100);
      });
      // NAV BALL LOCATION -------
      let navLocation = $("#nav-location").find(".nav-ball");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".location-section",
            containerAnimation: tlMain,
            start: "left left",
            end: "right left",
            //markers: true,
            toggleActions: "play reverse play reverse",
          },
        })
        .fromTo(
          "#nav-location",
          {
            pointerEvents: "auto",
          },
          {
            pointerEvents: "none",
          }
        )
        .to(
          navLocation,
          {
            x: "-100%",
            opacity: 1,
            duration: 0.35,
            ease: "power1.out",
          },
          0
        );
      // Click para a bola ficar no sitio correto
      $("#nav-location").on("click", function () {
        $(".nav-link").css("pointer-events", "auto");
        setTimeout(() => {
          $(this).css("pointer-events", "none");
        }, 100);
      });
      // NAV BALL AVAILABILITY -------
      let navAvailability = $("#nav-availability").find(".nav-ball");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".availability-section",
            containerAnimation: tlMain,
            start: "left left",
            end: "right left",
            //markers: true,
            toggleActions: "play reverse play reverse",
          },
        })
        .fromTo(
          "#nav-availability",
          {
            pointerEvents: "auto",
          },
          {
            pointerEvents: "none",
          }
        )
        .to(
          navAvailability,
          {
            x: "-100%",
            opacity: 1,
            duration: 0.35,
            ease: "power1.out",
          },
          0
        );
      // Click para a bola ficar no sitio correto
      $("#nav-availability").on("click", function () {
        $(".nav-link").css("pointer-events", "auto");
        setTimeout(() => {
          $(this).css("pointer-events", "none");
        }, 100);
      });
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
        const state = Flip.getState(img2back, {
          props: "z, index",
        });
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
        const state = Flip.getState(img3back, {
          props: "z, index",
        });
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
        const state = Flip.getState(img4back, {
          props: "z, index",
        });
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
      // THE ISLAND ------
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".island-section",
            containerAnimation: tlMain,
            start: "left left",
            end: "right right",
            scrub: true,
            //markers: true
          },
        })
        .to(".island-component", {
          xPercent: 100,
          ease: "none",
        });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".island-section",
            containerAnimation: tlMain,
            start: "10% left",
            end: "right right",
            scrub: true,
            //toggleActions: "play none none reverse",
            //markers: true
          },
        })
        .to(".island-background-video", {
          width: "100%",
          height: "100%",
          marginTop: 0,
        });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".island-section",
            containerAnimation: tlMain,
            start: "10% left",
            end: "20% left",
            scrub: true,
            //toggleActions: "play none none reverse",
            //markers: true
          },
        })
        .to(".island-cima", {
          y: "-50%",
          rotationX: "60_cw",
          opacity: 0,
          ease: "none",
        })
        .to(
          ".island-baixo",
          {
            y: "50%",
            rotationX: "-60_ccw",
            opacity: 0,
            ease: "none",
          },
          0
        );
      // END THE ISLAND
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
        .to(".location-sticky", {
          x: "100vw",
          ease: "none",
        })
        .to(
          ".location-update-line",
          {
            height: "100%",
            ease: "none",
          },
          0
        );

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
          {
            scale: 1,
            opacity: 1,
            ease: "power1.inOut",
            duration: 1,
          },
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
          {
            scale: 1,
            opacity: 1,
            ease: "power1.inOut",
            duration: 1,
          },
          0.5
        );
      // END LOCATION
      // AVAILABILITY ------
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
            trigger: ".availability-section",
            containerAnimation: tlMain,
            start: "left left",
            end: "right right",
            scrub: true,
            //markers: true
          },
        })
        .to(".availability-anda", {
          x: "100vw",
          ease: "none",
        });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".availability-scroll-absolute",
            containerAnimation: tlMain,
            start: "left left",
            end: "right right",
            scrub: true,
            //markers: true
          },
        })
        .to(".scroll-track", {
          y: "-" + trackHeight,
          ease: "none",
        });
      // END AVAILABILITY
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

      // END Titulo
      // IMAGEM APARECE
      $(".vision-img-wrap").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(this);
        let castanho = $(this).siblings(".vision-img-brown");
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
        .fromTo(
          ".hero-img-background",
          {
            x: "0%",
          },
          {
            x: "30%",
          }
        );
      // ISLAND Image
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".island-section",
            containerAnimation: tlMain,
            start: "50% left",
            end: "right left",
            scrub: true,
            //markers: true
          },
        })
        .fromTo(
          ".island-background-video",
          {
            x: "0%",
          },
          {
            x: "30%",
          }
        );
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
        .fromTo(
          ".location-big-img",
          {
            x: "-20%",
          },
          {
            x: "20%",
          }
        );
      // FOOTER
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".availability-section",
            containerAnimation: tlMain,
            start: "25% left",
            end: "right 99%",
            scrub: true,
            //markers: true
          },
        })
        .from(".inquire-section", {
          y: "-60%",
        })
        .from(
          ".inquire-background-img",
          {
            y: "30%",
          },
          0
        );
      // END IMAGE PARALLAX -------
    });
    // END HORIZONTAL SCROLL ----------
  }, []);

  // Form Floating Label -------
  useEffect(() => {
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
  }, []);

  // Form Error
  useEffect(() => {
    $(".c-text-field").removeClass("cc-error");

    function errorMessage() {
      if ($(".c-text-field").hasClass("cc-error")) {
        $(".form-please-wrap").addClass("error");
      } else {
        $(".form-please-wrap").removeClass("error");
      }
    }
    $(".c-form_field, .form-button-wrap").on(
      "mouseenter mouseleave",
      function () {
        errorMessage();
      }
    );
    $(".form-botton, .form").on("click", function () {
      setTimeout(() => {
        errorMessage();
      }, 200);
    });
    // END Form Error
  }, []);

  // Inquire Open --------
  useEffect(() => {
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
  }, []);

  // Resize PC to TABLET - TABLET to PC - Reload Site
  useEffect(() => {
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
        if (
          (tabletV === true || tabletM.matches) &&
          (pcM === true || pc.matches)
        ) {
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
  }, []);

  useEffect(() => {
    let horizontalM = gsap.matchMedia();

    // MOBILE GSAP
    horizontalM.add("(max-width: 991px)", () => {
      // Nav Color 1
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".vision-section",
            start: "top top",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
            //markers: true
          },
        })
        .to(".nav", {
          color: "#120902",
          duration: 0.3,
          ease: "none",
        });
      // Nav Color 2
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".island-section",
            start: "top top",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
            //markers: true
          },
        })
        .to(".nav", {
          color: "white",
          duration: 0.3,
          ease: "none",
        });
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
        .to(".nav", {
          color: "#120902",
          duration: 0.3,
          ease: "none",
        });
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
        .to(".location-update-line", {
          width: "100%",
          ease: "none",
        });

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
          {
            scale: 1,
            opacity: 1,
            ease: "power1.inOut",
            duration: 1,
          },
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
          {
            scale: 1,
            opacity: 1,
            ease: "power1.inOut",
            duration: 1,
          },
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
        .fromTo(
          ".hero-img-background",
          {
            y: "0%",
          },
          {
            y: "15%",
          }
        );
      // END IMAGE PARALLAX --------
    });
  }, []);

  // Image HOVER Animation
  useEffect(() => {
    $("#one24-img, #island-img").each(function () {
      // Each define esta function a cada um com esta class
      let targetElement1 = $(".vision-img.n1");
      let targetElement2 = $(".vision-img.n2");
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
            animation1island.progress(0).pause();
            animation2island.progress(0).pause();
          },
        }
      );
      let animation1island = gsap.fromTo(
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
      let animation2island = gsap.fromTo(
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
      var islandV = false;

      $("#island-img").on("mouseenter", function () {
        if (islandV === true) {
          animation1.play();
          animation2.play();
        }
      });

      $("#one24-img").on("mouseenter", function () {
        islandV = true;
        animation1island.play();
        animation2island.play();
      });
    });
    // END Image Hover Animation
  }, []);

  return (
    <div className="page-wrapper">
      <main className="main-wrapper">
        <section className="section-height">
          <div className="sticky-element">
            <div id="panels" className="track">
              <div id="panels-container" className="track-flex">
                <HomeSection />
                <VisionSection />
                <ArtworkSection />
                <GallerySection />
                <ShopSection />
                <MuralsSection />
              </div>
            </div>
          </div>
        </section>
        <img
          className="ap-img-full-screen-1"
          src="images/640623a27b5c66fa68701f66_apartment-1.webp"
          alt="Apartamento ONE 24"
          sizes="100vw"
          data-flip-id="1"
          loading="lazy"
          srcSet="images/640623a27b5c66fa68701f66_apartment-1-p-500.webp 500w, images/640623a27b5c66fa68701f66_apartment-1-p-800.webp 800w, images/640623a27b5c66fa68701f66_apartment-1-p-1080.webp 1080w, images/640623a27b5c66fa68701f66_apartment-1-p-1600.webp 1600w, images/640623a27b5c66fa68701f66_apartment-1-p-2000.webp 2000w, images/640623a27b5c66fa68701f66_apartment-1.webp 2500w"
        />
        <img
          className="ap-img-full-screen-2"
          src="images/640623a3a5bff942b070fac8_apartment-2.webp"
          alt="Sala ONE 24"
          sizes="100vw"
          data-flip-id="2"
          loading="lazy"
          srcSet="images/640623a3a5bff942b070fac8_apartment-2-p-500.webp 500w, images/640623a3a5bff942b070fac8_apartment-2-p-800.webp 800w, images/640623a3a5bff942b070fac8_apartment-2-p-1080.webp 1080w, images/640623a3a5bff942b070fac8_apartment-2-p-1600.webp 1600w, images/640623a3a5bff942b070fac8_apartment-2-p-2000.webp 2000w, images/640623a3a5bff942b070fac8_apartment-2.webp 2500w"
        />
        <img
          className="ap-img-full-screen-3"
          src="images/640623a3c2a727a3d26ebd2d_apartment-3.webp"
          alt="Cozinha ONE 24"
          sizes="100vw"
          data-flip-id="3"
          loading="lazy"
          srcSet="images/640623a3c2a727a3d26ebd2d_apartment-3-p-500.webp 500w, images/640623a3c2a727a3d26ebd2d_apartment-3-p-800.webp 800w, images/640623a3c2a727a3d26ebd2d_apartment-3-p-1080.webp 1080w, images/640623a3c2a727a3d26ebd2d_apartment-3-p-1600.webp 1600w, images/640623a3c2a727a3d26ebd2d_apartment-3-p-2000.webp 2000w, images/640623a3c2a727a3d26ebd2d_apartment-3.webp 2500w"
        />
        <img
          className="ap-img-full-screen-4"
          src="images/640623a37b5c66566c701f67_apartment-4.webp"
          alt="Quarto ONE 24"
          sizes="100vw"
          data-flip-id="4"
          loading="lazy"
          srcSet="images/640623a37b5c66566c701f67_apartment-4-p-500.webp 500w, images/640623a37b5c66566c701f67_apartment-4-p-800.webp 800w, images/640623a37b5c66566c701f67_apartment-4-p-1080.webp 1080w, images/640623a37b5c66566c701f67_apartment-4-p-1600.webp 1600w, images/640623a37b5c66566c701f67_apartment-4-p-2000.webp 2000w, images/640623a37b5c66566c701f67_apartment-4.webp 2500w"
        ></img>
        <div className="inquire-open close">
          <div className="inquire-wrap close">
            <div className="inquire-open-close">
              <a
                id="close-inquire"
                href="#"
                className="nav-link inquire-close w-inline-block"
              >
                <div className="untitled-400-13">close</div>

                <div className="nav-ball white"></div>
              </a>
            </div>

            <div className="inquire-open-component">
              <div className="inquire-open-left">
                <div className="inquire-open-title">
                  <h2 className="tobias-300-122 mb-40">
                    INQUIRY
                    <br />
                    NOW
                  </h2>
                </div>

                <div className="inquire-open-info">
                  <div className="inquire-open-info-cima">
                    <div className="inquire-open-info-title">
                      <div className="untitled-400-13">WHERE</div>
                    </div>

                    <div className="inquire-open-info-links">
                      <a
                        href="https://goo.gl/maps/okYjeK9wPskFLS179"
                        target="_blank"
                        className="tobias-300-26 hover-links mb-13"
                      >
                        Av. Arriaga 75 Loja A, Marina Shopping
                        <br />
                        9000-065 Funchal
                      </a>
                    </div>
                  </div>

                  <div className="inquire-open-info-title">
                    <div className="untitled-400-13">CONTACTS</div>
                  </div>

                  <div className="inquire-open-info-links">
                    <div className="collection-numero w-dyn-list">
                      <div
                        role="list"
                        className="collection-numero w-dyn-items"
                      >
                        <div
                          role="listitem"
                          className="collection-numero w-dyn-item"
                        >
                          <a
                            href="tel:+351291147686"
                            className="tobias-300-26 hover-links mb-13"
                          >
                            +351 291 147 686
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mobile-frase">
                      <div className="untitled-400-10">
                        Local call, fees may apply
                      </div>
                    </div>

                    <div className="collection-numero w-dyn-list">
                      <div
                        role="list"
                        className="collection-numero w-dyn-items"
                      >
                        <div
                          role="listitem"
                          className="collection-numero w-dyn-item"
                        >
                          <a
                            href="tel:+351967182444"
                            className="tobias-300-26 hover-links mb-13"
                          >
                            +351 967 182 444
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mobile-frase">
                      <div className="untitled-400-10">
                        Local call, fees may apply
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inquire-open-right">
                <div className="c-form_block w-form">
                  <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    method="get"
                    data-wt-fv-form="1"
                    className="form"
                    data-wf-page-id="6401e4efa043695c1e1b5ee1"
                    data-wf-element-id="fb5d3d5f-2dec-4a45-f3cd-6af4e0a6052d"
                  >
                    <div className="form-top">
                      <div className="form-heading">
                        <div className="form-heading-top">
                          <div className="form-interest">
                            <div className="ball-interest"></div>

                            <div className="untitled-400-13">
                              Register interest
                            </div>
                          </div>

                          <div className="form-required">
                            <div className="untitled-400-10">
                              *Required fields
                            </div>
                          </div>
                        </div>

                        <div className="horizontal-line-wrap">
                          <div className="horizontal-line"></div>
                        </div>
                      </div>

                      <div className="c-form_field left-50">
                        <input
                          className="c-text-field w-input"
                          maxLength={256}
                          name="Fisrt-Name"
                          data-name="Fisrt Name"
                          placeholder="Fisrt Name*"
                          type="text"
                          id="Fisrt-Name"
                          required
                        />

                        <div className="c-error-message">
                          <div className="c-error-message-wrap">
                            <div className="c-error-text">
                              Please fill this field.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="c-form_field right-50">
                        <input
                          className="c-text-field w-input"
                          maxLength={256}
                          name="Last-Name"
                          data-name="Last Name"
                          placeholder="Last Name*"
                          type="text"
                          id="Last-Name"
                          required
                        />

                        <div className="c-error-message">
                          <div className="c-error-message-wrap">
                            <div className="c-error-text">
                              Please fill this field.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="c-form_field left-50">
                        <input
                          className="c-text-field w-input"
                          maxLength={256}
                          name="Email-Adress"
                          data-name="Email Adress"
                          placeholder="Email*"
                          type="email"
                          id="Email-Adress-2"
                          required
                        />

                        <div className="c-error-message">
                          <div className="c-error-message-wrap">
                            <div className="c-error-text">
                              Please fill this field.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="c-form_field right-50">
                        <input
                          className="c-text-field w-input"
                          maxLength={256}
                          name="Phone-Number"
                          data-name="Phone Number"
                          placeholder="Phone Number"
                          type="tel"
                          id="Phone-Number-2"
                        />

                        <div className="c-error-message">
                          <div className="c-error-message-wrap">
                            <div className="c-error-text">
                              Please fill this field.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="c-form_field tex-field">
                        <textarea
                          id="Request-2"
                          name="Request"
                          maxLength={5000}
                          data-name="Request"
                          placeholder="Request*"
                          required
                          className="c-text-field is-text-area w-input"
                        ></textarea>

                        <div className="c-error-message cc-shown">
                          <div className="c-error-message-wrap">
                            <div className="c-error-text">
                              Please fill this field.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-accept">
                        <label className="w-checkbox form-check-box">
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom form-checkbox"></div>
                          <input
                            id="Accept-the-Privacy-Policy"
                            type="checkbox"
                            name="Accept-the-Privacy-Policy"
                            data-name="Accept the Privacy Policy"
                            required
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1,
                            }}
                          />
                          <span className="untitled-400-10 w-form-label">
                            I have read and accept the�&nbsp;
                            <a
                              href="#"
                              target="_blank"
                              className="form-politica-link"
                            >
                              privacy policy
                            </a>
                            .
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="form-button-wrapper">
                      <input
                        type="submit"
                        data-wait=""
                        className="form-botton w-button"
                        value="SUBMIT"
                      />
                    </div>
                  </form>

                  <div className="form-sucess-component w-form-done">
                    <div className="form-error-flex">
                      <div className="form-heading">
                        <div className="form-heading-top">
                          <div className="form-interest">
                            <div className="ball-interest"></div>

                            <div className="untitled-400-13">
                              WE RECEIVED YOUR �&nbsp;MESSAGE
                            </div>
                          </div>
                        </div>

                        <div className="horizontal-line-wrap">
                          <div className="horizontal-line"></div>
                        </div>
                      </div>

                      <div className="tobias-300-98 mb-40">THANK YOU</div>
                    </div>
                  </div>

                  <div className="error-message w-form-fail">
                    <div className="form-message-text form-error">
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-please">
                <div className="form-please-wrap">
                  <div className="untitled-400-10">
                    PLEASE FILL IN THIS FIELD.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <section className="name-section">
          <div className="page-padding">
            <div className="name-component"></div>
          </div>
        </section> */}

        <div className="transition">
          <div className="transition-wrap">
            <div className="transition-component">
              <div className="transition-img-wrap">
                <img
                  src="images/6405d4c052dec18e7d8789b9_hero.webp"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="images/6405d4c052dec18e7d8789b9_hero-p-500.webp 500w, images/6405d4c052dec18e7d8789b9_hero-p-800.webp 800w, images/6405d4c052dec18e7d8789b9_hero-p-1080.webp 1080w, images/6405d4c052dec18e7d8789b9_hero-p-1600.webp 1600w, images/6405d4c052dec18e7d8789b9_hero-p-2000.webp 2000w, images/6405d4c052dec18e7d8789b9_hero.webp 2161w"
                  alt="Edificio ONE 24"
                  className="transition-img n1"
                />
                <img
                  src="images/64061e47a47c5fe13ae8f44c_img-2.webp"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="images/64061e47a47c5fe13ae8f44c_img-2-p-500.webp 500w, images/64061e47a47c5fe13ae8f44c_img-2-p-800.webp 800w, images/64061e47a47c5fe13ae8f44c_img-2-p-1080.webp 1080w, images/64061e47a47c5fe13ae8f44c_img-2-p-1600.webp 1600w, images/64061e47a47c5fe13ae8f44c_img-2.webp 1662w"
                  alt="Sala ONE 24"
                  className="transition-img n2"
                />
                <img
                  src="images/640623a27b5c66fa68701f66_apartment-1.webp"
                  loading="lazy"
                  sizes="100vw"
                  srcSet="images/640623a27b5c66fa68701f66_apartment-1-p-500.webp 500w, images/640623a27b5c66fa68701f66_apartment-1-p-800.webp 800w, images/640623a27b5c66fa68701f66_apartment-1-p-1080.webp 1080w, images/640623a27b5c66fa68701f66_apartment-1-p-1600.webp 1600w, images/640623a27b5c66fa68701f66_apartment-1-p-2000.webp 2000w, images/640623a27b5c66fa68701f66_apartment-1.webp 2500w"
                  alt="ONE 24"
                  className="transition-img n3"
                />
              </div>

              <div className="transition-bottom">
                <div className="transition-loading">
                  <div className="untitled-400-13">loading</div>

                  <div className="transition-point-1">
                    <div className="untitled-400-13">.</div>
                  </div>

                  <div className="transition-point-2">
                    <div className="untitled-400-13">.</div>
                  </div>

                  <div className="transition-point-3">
                    <div className="untitled-400-13">.</div>
                  </div>
                </div>

                <div className="transition-number">
                  <div className="tobias-300-32">0</div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-w-id="46e54662-91a6-7c69-9b8c-5f6213f41109"
            className="transition-trigger"
          ></div>
        </div>
      </main>
      <div className="design-system">
        <a href="tel:+351291147686" className="hover-links">
          +351 291 �&nbsp;147 686
          <br />
        </a>

        <div className="mb-block"></div>

        <div className="mb-none"></div>

        <div className="mb-line-h-1"></div>

        <div className="mb-line-h-1-23">
          This is some text inside of a div block.
        </div>
      </div>
      <div className="combo-classes">
        <div className="form-field-label cc-error"></div>

        <div className="c-error-message cc-shown"></div>

        <div className="c-text-field cc-error"></div>

        <div className="c-text-field cc-valid"></div>

        <div className="form-field-label form-field-focused"></div>

        <div className="form-please-wrap error"></div>

        <div className="mouse hover"></div>

        <div className="mouse pressed"></div>

        <div className="mouse nav-hover"></div>

        <div className="glass-block expand"></div>

        <div className="mouse-wrap expand"></div>

        <div className="expand-text expand"></div>

        <div className="mouse expand"></div>

        <div className="expand-text-none expand"></div>

        <div className="mouse-outro hover"></div>

        <div className="mouse-outro nav-hover"></div>

        <div className="mouse-outro-2 hover"></div>

        <div className="mouse-outro-2 nav-hover"></div>

        <div className="mouse-outro-2 black"></div>

        <div className="mouse-outro black"></div>

        <div className="mouse black"></div>

        <div className="mouse black expand"></div>

        <div className="mouse black hover"></div>

        <div className="ap-img-full-screen-1 visible"></div>

        <div className="ap-img-full-screen-2 visible"></div>

        <div className="ap-img-full-screen-3 visible"></div>

        <div className="ap-img-full-screen-4 visible"></div>

        <div className="ap-img-full-close close"></div>

        <div className="mouse-wrap close"></div>

        <div className="inquire-open close"></div>

        <div className="inquire-wrap close"></div>

        <div className="transition-wrap close"></div>

        <div className="transition-bottom close"></div>

        <div className="availability-button grey"></div>
      </div>
    </div>
  );
}
