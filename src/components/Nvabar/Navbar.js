import React, { useEffect } from "react";
import { NavLink } from "react-router";
import {
  NavbarContainer,
  Nav,
  LogoContainer,
  NavList,
  HumbergerContainer,
  CloseButton,
} from "./styles";
import { NavBarLinks } from "../../data/Constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavbarContainer>
        <Nav>
          <LogoContainer>
            <NavLink to="/" className={"logo-text"}>
              {"B"}
              <span style={{ color: "#3B82F6" }}>{"S"}</span>
            </NavLink>
          </LogoContainer>

          <ul className="nav-links-container">
            {NavBarLinks.map((link) => (
              <NavList key={link.id}>
                <NavLink to={link.path} className={"nav-links"}>
                  {link.label}
                </NavLink>
              </NavList>
            ))}
          </ul>
          <button
            className="hamburger"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            ☰
          </button>
        </Nav>
      </NavbarContainer>
      {isOpen && (
        <div>
          <HumbergerContainer onClick={() => setIsOpen(false)}>
            {NavBarLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={"humberger-links"}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </HumbergerContainer>
        </div>
      )}
      {isOpen && (
        <CloseButton
          onClick={(e) => {
            setIsOpen(false);
            e.stopPropagation();
          }}
        >
          {"X"}
        </CloseButton>
      )}
    </>
  );
};

export default Navbar;
