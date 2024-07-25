import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import $ from "jquery";

gsap.registerPlugin(ScrollTrigger, Flip);

const useHorizontalScroll = () => {
  useEffect(() => {
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
            trigger: ".about-section",
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
            trigger: ".artwork-section",
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
            trigger: ".gallery-section",
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
            trigger: ".shop-section",
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
      $("#nav-about").on("click", function () {
        $(".nav-link").css("pointer-events", "auto");
        setTimeout(() => {
          $(this).css("pointer-events", "none");
        }, 100);
      });
      // NAV BALL ABOUT -------
      let navVision = $("#nav-about").find(".nav-ball");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about-section",
            containerAnimation: tlMain,
            start: "left left",
            end: "right left",
            //markers: true,
            toggleActions: "play reverse play reverse",
          },
        })
        .fromTo(
          "#nav-about",
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
      $("#nav-about").on("click", function () {
        $(".nav-link").css("pointer-events", "auto");
        setTimeout(() => {
          $(this).css("pointer-events", "none");
        }, 100);
      });
      // NAV BALL artwork -------
      let navartwork = $("#nav-artwork").find(".nav-ball");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".artwork-section",
            containerAnimation: tlMain,
            start: "left left",
            end: "right left",
            //markers: true,
            toggleActions: "play reverse play reverse",
          },
        })
        .fromTo(
          "#nav-artwork",
          {
            pointerEvents: "auto",
          },
          {
            pointerEvents: "none",
          }
        )
        .to(
          navartwork,
          {
            x: "-100%",
            opacity: 1,
            duration: 0.35,
            ease: "power1.out",
          },
          0
        );
      // Click para a bola ficar no sitio correto
      $("#nav-artwork").on("click", function () {
        $(".nav-link").css("pointer-events", "auto");
        setTimeout(() => {
          $(this).css("pointer-events", "none");
        }, 100);
      });
      // NAV BALL ISLAND -------
      let navIsland = $("#nav-gallery").find(".nav-ball");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".gallery-section",
            containerAnimation: tlMain,
            start: "left left",
            end: "right left",
            //markers: true,
            toggleActions: "play reverse play reverse",
          },
        })
        .fromTo(
          "#nav-gallery",
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
      $("#nav-gallery").on("click", function () {
        $(".nav-link").css("pointer-events", "auto");
        setTimeout(() => {
          $(this).css("pointer-events", "none");
        }, 100);
      });
      // NAV BALL LOCATION -------
      let navLocation = $("#nav-shop").find(".nav-ball");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".shop-section",
            containerAnimation: tlMain,
            start: "left left",
            end: "right left",
            //markers: true,
            toggleActions: "play reverse play reverse",
          },
        })
        .fromTo(
          "#nav-shop",
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
      $("#nav-shop").on("click", function () {
        $(".nav-link").css("pointer-events", "auto");
        setTimeout(() => {
          $(this).css("pointer-events", "none");
        }, 100);
      });
      // NAV BALL AVAILABILITY -------
      let navAvailability = $("#nav-murals").find(".nav-ball");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".murals-section",
            containerAnimation: tlMain,
            start: "left left",
            end: "right left",
            //markers: true,
            toggleActions: "play reverse play reverse",
          },
        })
        .fromTo(
          "#nav-murals",
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
      $("#nav-murals").on("click", function () {
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
            trigger: ".gallery-section",
            containerAnimation: tlMain,
            start: "left left",
            end: "right right",
            scrub: true,
            //markers: true
          },
        })
        .to(".gallery-component", {
          xPercent: 100,
          ease: "none",
        });
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
        .to(".gallery-cima", {
          y: "-50%",
          rotationX: "60_cw",
          opacity: 0,
          ease: "none",
        })
        .to(
          ".gallery-baixo",
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
            trigger: ".shop-trigger",
            containerAnimation: tlMain,
            start: "left left",
            end: "right right",
            scrub: true,
            //markers: true
          },
        })
        .to(".shop-sticky", {
          x: "100vw",
          ease: "none",
        })
        .to(
          ".shop-update-line",
          {
            height: "100%",
            ease: "none",
          },
          0
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".shop-trigger",
            containerAnimation: tlMain,
            start: "18% left",
            end: "right right",
            //scrub: true,
            toggleActions: "play none none reverse",
            //markers: true
          },
        })
        .to(".shop-info-wrap.n1", {
          //scale: 0.5,
          opacity: 0,
          ease: "power1.inOut",
          duration: 1,
        })
        .to(
          ".shop-info-wrap.n2",
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
            trigger: ".shop-trigger",
            containerAnimation: tlMain,
            start: "36% left",
            end: "right right",
            //scrub: true,
            toggleActions: "play none none reverse",
            //markers: true
          },
        })
        .to(".shop-info-wrap.n2", {
          //scale: 0.5,
          opacity: 0,
          ease: "power1.inOut",
          duration: 1,
        })
        .to(
          ".shop-info-wrap.n3",
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
            trigger: ".murals-section",
            containerAnimation: tlMain,
            start: "left left",
            end: "right right",
            scrub: true,
            //markers: true
          },
        })
        .to(".murals-anda", {
          x: "100vw",
          ease: "none",
        });
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
            trigger: ".gallery-section",
            containerAnimation: tlMain,
            start: "50% left",
            end: "right left",
            scrub: true,
            //markers: true
          },
        })
        .fromTo(
          ".gallery-background-video",
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
            trigger: ".shop-section",
            containerAnimation: tlMain,
            start: "40% left",
            end: "right left",
            scrub: true,
            //markers: true
          },
        })
        .fromTo(
          ".shop-big-img",
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
            trigger: ".murals-section",
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
};

export default useHorizontalScroll;
