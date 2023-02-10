import { cleanup, render, screen } from "@testing-library/react";
import { renderWithReduxAndRouter } from "../../utils/testUtils";
import Home from "./Home";

describe("Home test", () => {

  test("should render home page", () => {
    render(<Home />);
    const homeElement = screen.getByTestId("home-header");
    expect(homeElement).toBeInTheDocument();
  });
});
