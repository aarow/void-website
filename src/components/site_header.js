import { useState, useEffect, useRef } from "react";
import Head from "next/head";
// import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const AT_TOP_CLASS =
  "navbar-dark bg-transparent py-2 py-md-5 px-md-5 transition-400";
const NOT_TOP_CLASS =
  "navbar-dark bg-black-opacity-less py-2 py-md-4 px-md-4 transition-400";

export default function SiteHeader(props) {
  const { isHome = false } = props;
  const [navClass, setNavClass] = useState("d-none");

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

    window.addEventListener("scroll", function handleScroll(e) {
      if (window.pageYOffset > 100) {
        setNavClass(NOT_TOP_CLASS);
      } else {
        setNavClass(AT_TOP_CLASS);
      }
    });
    return () => {
      window.removeEventListener("scroll", "handleScroll");
    };
  }

  return (
    <>
      <header className="site-header">
        <Navbar fixed="top" expand="md" className={navClass}>
          <Navbar.Brand href="#">
            <img src="/images/site-logo-white.svg" alt="VOID" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">
                <Button variant="outline-light" size="sm">
                  Contact
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
}
