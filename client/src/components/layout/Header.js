import React, { useContext } from "react";
import classnames from "classnames";
import RoomsContext from "./../../context/rooms.context";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";
import PlayerList from "./../game/PlayerList";

const Header = () => {
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const context = useContext(RoomsContext);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  return (
    <>
      <Navbar className="bg-dark" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              className="text-white"
              style={{ fontSize: "2em" }}
            >
              Codes Against Humanity
            </NavbarBrand>
            <button
              aria-expanded={navbarCollapse}
              className={classnames("navbar-toggler navbar-toggler", {
                toggled: navbarCollapse
              })}
              onClick={toggleNavbarCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            navbar
            isOpen={navbarCollapse}
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  title="Follow us on Twitter"
                >
                  <i className="fa fa-twitter" />
                  <p className="d-lg-none">Twitter</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      {context.room !== {} ? <PlayerList /> : null}
    </>
  );
};

export default Header;
