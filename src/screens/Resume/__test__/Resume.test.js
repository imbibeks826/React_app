import React from "react";
import { render } from "@testing-library/react";
import Resume from "../Resume";

describe("Resume snapshot test", () => {
  test("Snapshot test", () => {
    const { asFragment } = render(<Resume />);
    expect(asFragment).toMatchSnapshot();
  });
});
