import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Outlet } from "react-router";
import Router from "../Router";

jest.mock("../../../App", () => ({
  ElementComponent: () => <div>ElementComponent</div>,
}));

jest.mock("../../screens/About/About", () => {
  const { Outlet } = require("react-router");
  return function MockAbout() {
    return (
      <>
        <div>About Page</div>
        <Outlet />
      </>
    );
  };
});

jest.mock("../../screens/Contact/Contact", () => {
  return function MockContact() {
    return <div>Contact Page</div>;
  };
});

jest.mock("../../screens/HomePage/HomePage", () => {
  return function MockHomePage() {
    return <div>Home Page</div>;
  };
});

jest.mock("../../components/Projects", () => {
  return function MockProjects() {
    return <div>Projects Page</div>;
  };
});

describe("Router Component", () => {
  test("renders HomePage on root path", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Router />
      </MemoryRouter>
    );
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });

  test("renders About page on /about path", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <Router />
      </MemoryRouter>
    );
    expect(screen.getByText("About Page")).toBeInTheDocument();
  });

  test("renders Contact page on /contact path", () => {
    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <Router />
      </MemoryRouter>
    );
    expect(screen.getByText("Contact Page")).toBeInTheDocument();
  });

  test("renders Projects nested route on /about/projects path", () => {
    render(
      <MemoryRouter initialEntries={["/about/projects"]}>
        <Router />
      </MemoryRouter>
    );
    expect(screen.getByText("Projects Page")).toBeInTheDocument();
  });

  test("renders nothing for undefined routes", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/undefined-route"]}>
        <Router />
      </MemoryRouter>
    );
    expect(container.firstChild?.children).toBe(undefined);
  });
});
