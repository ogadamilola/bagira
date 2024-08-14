import React from "react";

const Navbar = () => {
  return (
    <nav class="nav">
      <div class="nav-links-component">
        <a href="#home" id="nav-home" class="nav-link home w-inline-block">
          <div class="josefin-400-13">home</div>

          <div class="nav-ball"></div>
        </a>
        <a href="#about" id="nav-about" class="nav-link about w-inline-block">
          <div class="josefin-400-13">about</div>

          <div class="nav-ball"></div>
        </a>
        <a href="#artwork" id="nav-artwork" class="nav-link artwork w-inline-block">
          <div class="josefin-400-13">artwork</div>

          <div class="nav-ball"></div>
        </a>
        <a href="#shop" id="nav-shop" class="nav-link shop w-inline-block">
          <div class="josefin-400-13"> shop</div>

          <div class="nav-ball"></div>
        </a>
        <a href="#gallery" id="nav-gallery" class="nav-link gallery w-inline-block">
          <div class="josefin-400-13">the gallery</div>

          <div class="nav-ball"></div>
        </a>
        <a href="#location" id="nav-location" class="nav-link location w-inline-block">
          <div class="josefin-400-13">location</div>

          <div class="nav-ball"></div>
        </a>
        <a href="#murals" id="nav-murals" class="nav-link murals w-inline-block">
          <div class="josefin-400-13">murals</div>

          <div class="nav-ball"></div>
        </a>
      </div>

      <div class="nav-link-inquire">
        {/* <a href="/pt" class="nav-link lingua w-inline-block">
          <div class="josefin-400-13">pt</div>

          <div class="nav-ball"></div>
        </a> */}
        <a href="#" class="nav-link inquire w-inline-block">
          <div class="josefin-400-13">inquire</div>

          <div class="nav-ball"></div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
