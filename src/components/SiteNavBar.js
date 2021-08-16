import Link from "next/link";
import { Navbar, Nav, Button } from "react-bootstrap";
import NavButton from "./NavButton";
import { routes } from "../lib/router";
import ContactButton from "./ContactButton";
import DonateButton from "./DonateButton";

export default function SiteNavBar(props) {
  return (
    <Navbar expand="md" className="navbar-dark bg-transparent">
      <Navbar.Brand href="/">
        <img src="/images/site-logo-white.svg" alt="VOID" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {routes.map((route) => (
            <NavButton key={route.slug} {...route} className="mx-3" />
          ))}
          <ContactButton size="sm" className="ml-md-3" />
          <DonateButton size="sm" className="ml-md-3" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
