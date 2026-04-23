import React, { useEffect, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 105) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
            role="button"
            id="menu"
            className="hamburger"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            ☰
          </button>
        </Nav>
      </NavbarContainer>
      {isOpen && (
        <div data-testid="humberger-menu">
          <HumbergerContainer
            onClick={() => setIsOpen(false)}
            $isScrolled={isScrolled}
          >
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
          $isScrolled={isScrolled}
          data-testid="close-button"
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
