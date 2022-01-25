import { Link } from "react-router-dom";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import * as s from "../../styles/components/header.module.scss";
const HeaderComponent = () => {
  return (
    <>
      <header
        className={`${s.z_header_main} d-flex flex-wrap align-items-center justify-content-center`}
      >
        <Navbar variant="dark">
          <>
            <Nav className={`${s.z_nav}`}>
              <Nav.Link href="#home" className={`${s.z_nav_item}`}>
                Collections
              </Nav.Link>
              <Nav.Link href="#features" className={`${s.z_nav_item}`}>
                News
              </Nav.Link>
              <Nav.Link href="#pricing" className={`${s.z_nav_item}`}>
                NFTCalendar
              </Nav.Link>
              <Nav.Link href="#pricing" className={`${s.z_nav_item}`}>
                Analytics
              </Nav.Link>
            </Nav>
            <Navbar.Brand
              href="/"
              className={`align-items-center text-decoration-none ${s.z_logo}`}
            >
              <img src="/assets/images/logo.png" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home" className={`${s.z_nav_item}`}>
                Community
              </Nav.Link>
              <Nav.Link href="#features" className={`${s.z_nav_item}`}>
                Releases
              </Nav.Link>
              <Nav.Link href="#pricing" className={`${s.z_nav_item}`}>
                About
              </Nav.Link>
            </Nav>
          </>
        </Navbar>
      </header>
    </>
  );
};

export default HeaderComponent;
