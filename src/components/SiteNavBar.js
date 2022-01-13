import Link from "next/link";
import { NavDropdown, Navbar, Nav, Button } from "react-bootstrap";
import NavButton from "./NavButton";
import { siteRoutes } from "../lib/router";
import ContactButton from "./ContactButton";
import DonateButton from "./DonateButton";

export default function SiteNavBar(props) {
  const navButtons = (routes) =>
    routes.map((route) => {
      const { routes } = route;
      if (routes) {
        return (
          <NavDropdown
            title={route.label}
            id={route.slug}
            key={route.slug}
            className="mx-md-3"
          >
            {navButtons(routes)}
          </NavDropdown>
        );
      } else {
        return <NavButton key={route.slug} {...route} className="mx-md-3" />;
      }
    });

  return (
    <Navbar expand="md" className="navbar-dark bg-transparent">
      <Link href="/" passHref>
        <Navbar.Brand>
          <img src="/images/site-logo-white.svg" alt="VOID" />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {navButtons(siteRoutes)}
          <ContactButton
            size="sm"
            className="ml-md-3 mt-3 mt-md-0 mb-3 mb-md-0"
          />
          <DonateButton size="sm" className="ml-md-3" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
