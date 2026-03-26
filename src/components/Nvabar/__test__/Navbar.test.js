import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Navbar from "../Navbar";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  NavLink: ({ children, to }) => <a href={to}>{children}</a>,
}));

describe("Navbar Component", () => {
  test("renders Navbar component", () => {
    render(<Navbar />);
    const homeLink = screen.getByText(/Home/i);
    const aboutLink = screen.getByText(/About/i);
    const contactLink = screen.getByText(/Contact/i);
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test("toggles mobile menu on hamburger click", () => {
    global.innerWidth = 480;
    global.innerHeight = 800;

    // Trigger resize event
    global.dispatchEvent(new Event("resize"));

    render(<Navbar />);
    const hamburgerButton = screen.getByText("☰");
    fireEvent.click(hamburgerButton);
    const navLinksContainer = screen.getByTestId("humberger-menu");
    expect(navLinksContainer).toBeVisible();
  });

  test("Check useEffect setIsOpen to false on window resize", () => {
    global.innerWidth = 480;
    global.innerHeight = 800;

    // Trigger resize event
    global.dispatchEvent(new Event("resize"));

    render(<Navbar />);
    const hamburgerButton = screen.getByText("☰");
    fireEvent.click(hamburgerButton);
    const navLinksContainer = screen.queryByTestId("humberger-menu");
    expect(navLinksContainer).toBeVisible();

    // Simulate window resize to a larger width
    act(() => {
      global.innerWidth = 1024;
      global.dispatchEvent(new Event("resize"));
    });

    const navLinksContainerAfterResize = screen.queryByTestId("humberger-menu");

    expect(navLinksContainerAfterResize).not.toBeInTheDocument();
  });

  test("closes mobile menu on link click", () => {
    global.innerWidth = 480;
    global.innerHeight = 800;

    // Trigger resize event
    global.dispatchEvent(new Event("resize"));

    render(<Navbar />);
    const hamburgerButton = screen.getByText("☰");
    fireEvent.click(hamburgerButton);
    const navLinksContainer = screen.getByTestId("humberger-menu");
    expect(navLinksContainer).toBeVisible();

    const homeLink = screen.getAllByText(/home/i);
    // console.log("Bibek-----", homeLink);
    fireEvent.click(homeLink[1]);
    expect(navLinksContainer).not.toBeInTheDocument();
  });

  test("closes mobile menu on outside click", () => {
    global.innerWidth = 480;
    global.innerHeight = 800;

    // Trigger resize event
    global.dispatchEvent(new Event("resize"));

    render(<Navbar />);
    const hamburgerButton = screen.getByText("☰");
    fireEvent.click(hamburgerButton);
    const navLinksContainer = screen.getByTestId("humberger-menu");
    expect(navLinksContainer).toBeVisible();
    const closeIcon = screen.getByTestId("close-button");
    fireEvent.click(closeIcon);
    expect(screen.queryByTestId("humberger-menu")).not.toBeInTheDocument();
  });

  test("Click on sidebar item", () => {
    global.innerWidth = 480;
    global.innerHeight = 800;

    // Trigger resize event
    global.dispatchEvent(new Event("resize"));

    render(<Navbar />);
    const hamburgerButton = screen.getByText("☰");
    fireEvent.click(hamburgerButton);
    const navLinksContainer = screen.getByTestId("humberger-menu");
    expect(navLinksContainer).toBeVisible();

    const aboutLink = screen.getAllByText(/about/i);
    fireEvent.click(aboutLink[1]);
    expect(navLinksContainer).not.toBeInTheDocument();
  });

  test("Snapshot test for Navbar component", () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
