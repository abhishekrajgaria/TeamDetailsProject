import Footer from "./Footer";
import { render, screen } from "@testing-library/react";

describe("Footer test", () => {
  test("should render footer", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
