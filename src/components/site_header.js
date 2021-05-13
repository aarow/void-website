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

export default function SiteHeader() {
  const [navClass, setNavClass] = useState(AT_TOP_CLASS);

  useEffect(listenScroll, []);

  function listenScroll() {
    window.addEventListener("scroll", (e) => {
      if (window.pageYOffset > 100) {
        setNavClass(NOT_TOP_CLASS);
      } else {
        setNavClass(AT_TOP_CLASS);
      }
    });
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
