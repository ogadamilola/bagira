import React from "react";

const useMouseAnimations = () => {
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
    ".cta, .big-cta, .murals-button, .vision-hover-text, .form-botton, .bemine-link, .inquire-open-info-links, .c-form_field, .form-accept, .decline, .cookies-link"
  )
    .not(".nav-link, .small-links")
    .mouseenter(function () {
      $(".mouse").addClass("hover");
      $(".mouse-outro").addClass("hover");
      $(".mouse-outro-2").addClass("hover");
    });
  $(
    ".cta, .big-cta, .murals-button, .vision-hover-text, .form-botton, .bemine-link, .inquire-open-info-links, .c-form_field, .form-accept, .decline, .cookies-link"
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
    ".vision-section, .artwork-section, .shop-section, .murals-section, .hero-scroll, .murals-component"
  ).mouseenter(function () {
    $(".mouse, .mouse-outro, .mouse-outro-2").addClass("black");
  });
  $(".hero-scroll").mouseleave(function () {
    $(".mouse, .mouse-outro, .mouse-outro-2").removeClass("black");
  });
  $(
    ".gallery-section, .hero-section, .inquire-open, .inquire-section"
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
};

export default useMouseAnimations;
