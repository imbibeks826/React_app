import styled from "styled-components";
import React from "react";

// export const Hamburger = styled.div`
// { display: none; }
//  `;

export const NavbarContainer = styled.div`
  background-color: #f3f4f6;
  .nav-links-container {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-direction: row;
  }
  .nav-links {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  }
  .hamburger {
    display: none;
    font-size: 24px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .nav-links-container {
      display: none;
    } /* hide horizontal links */
    .hamburger {
      display: block;
    } /* show hamburger */
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #1e3a8a;
  color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  background-color: #ffffff;
  border-radius: 8px;

  .logo-text {
    color: #1e3a8a;
    text-decoration: none;
    font-size: 27px;
    font-weight: bold;
    letter-spacing: 2px;
  }
`;

export const NavList = styled.li`
  margin: 0 10px;
`;

export const HumbergerContainer = styled.div`
  position: absolute;
  top: 106px;
  left: 20px;
  width: calc(100% - 40px);
  height: auto;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 999;
  .humberger-links {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    padding-left: 20px;
    font-size: 24px;
    margin: 20px 0px;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 106px;
  left: calc(100% - 60px);
  padding: 10px 10px 10px 10px;
  cursor: pointer;
  color: white;
  z-index: 1000;
`;
