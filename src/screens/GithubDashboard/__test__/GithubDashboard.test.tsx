import React from "react";
import { render } from "@testing-library/react";
import GithubDashboard from "../GithubDashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as ReactQuery from "@tanstack/react-query";

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useQuery: jest.fn().mockReturnValue({
    data: undefined,
    error: new Error("Network response was not ok"),
    isLoading: true,
    isPending: false,
  }),
}));

describe('Test GithubDashboard component', () => {
  afterEach(() => jest.resetAllMocks());
  test('should render the component', () => {
    (ReactQuery.useQuery).mockReturnValue({
      data: undefined,
      error: null,
      isLoading: true,
      isPending: false,
    });

    // Render the GithubDashboard component
    const { getByText } = render(
      <QueryClientProvider client={new QueryClient()}>
    <GithubDashboard />
    </QueryClientProvider>
     );

    // Check if the component renders correctly
    expect(getByText('Go to github')).toBeInTheDocument();
  });

  test('should display error state', () => {
    (ReactQuery.useQuery).mockReturnValue({
      data: undefined,
      error: new Error("Network response was not ok"),
      isLoading: false,
      isPending: false,
    });
    
    const { getByText } = render(
      <QueryClientProvider client={new QueryClient()}>
        <GithubDashboard />
      </QueryClientProvider>
    );
    
    expect(getByText('Go to github')).toBeInTheDocument();
  });

  test("check snapshot", () => {
    (ReactQuery.useQuery).mockReturnValue({
      data: undefined,
      error: new Error("Network response was not ok"),
      isLoading: false,
      isPending: false,
    });
    const { asFragment } = render(
      <QueryClientProvider client={new QueryClient()}>
        <GithubDashboard />
      </QueryClientProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });


});