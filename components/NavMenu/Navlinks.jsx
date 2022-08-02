import Link from "next/link.js";
import React, { useRef } from "react";
import navlinks from "./data.js";
import navlinkStyles from "./navlinks.module.css";

// import { Link } from "react-router-dom";

export default function Navlinks() {
  const navRef = useRef();
  const menuRef = useRef();
  let isMenuClicked = true;
  // toggle navbar
  const showNavbar = () => {
    navRef.current.classList.toggle([navlinkStyles.responsive_nav]);

    // toggle nav-hambuger slide left animation
    isMenuClicked && menuRef.current.classList.toggle([navlinkStyles.open]);
  };

  return (
    <div className={navlinkStyles.menuBar_wrapper}>
      <div className={navlinkStyles.menuBar_container}>
        <span className={navlinkStyles.nav_logo_container}>
          <Link href="/" className={navlinkStyles.nav_logo}>
            Olowuife Oluwaseun
          </Link>
        </span>

        {/* menu-hamburger */}
        <div className={navlinkStyles.nav_btn_container} onClick={showNavbar}>
          <span className={navlinkStyles.nav_btn_burger} ref={menuRef}></span>
        </div>
        {/* end of menu-hamburger */}
      </div>

      {/* navbar-links */}
      <ul className={navlinkStyles.navlinks_wrapper} ref={navRef}>
        {navlinks.map((navlink) => (
          <li key={navlink.id}>
            <Link href={navlink.to}>{navlink.navlink}</Link>
          </li>
        ))}
      </ul>
      {/* end of navbar-links */}
    </div>
  );
}
