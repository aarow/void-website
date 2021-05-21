import { useState, useEffect, useRef } from "react";
import SiteNavBar from "./SiteNavBar";

const AT_TOP_CLASS =
  "site-header fixed-top py-2 py-md-5 px-md-5 transition-400";
const NOT_TOP_CLASS =
  "site-header fixed-top bg-black-opacity-less py-2 py-md-4 px-md-4 transition-400";

export default function SiteHeader(props) {
  const { isHome = false } = props;
  const [navClass, setNavClass] = useState(`opacity-0 ${NOT_TOP_CLASS}`);

  // set up scroll listener
  useEffect(listenScroll, []);

  function listenScroll() {
    // if we're not on home page, then just use regular header classes
    if (!isHome) {
      setNavClass(NOT_TOP_CLASS);
      return;
    }

    // if we're on home page, use home page classes and listen for scroll
    setNavClass(AT_TOP_CLASS);

    window.addEventListener("scroll", handleScroll);

    // cleanup listener i guess
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }

  function handleScroll(e) {
    if (window.pageYOffset > 100) {
      setNavClass(NOT_TOP_CLASS);
    } else {
      setNavClass(AT_TOP_CLASS);
    }
  }

  return (
    <header className={navClass}>
      <SiteNavBar />
    </header>
  );
}
