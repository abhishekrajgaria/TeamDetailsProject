import Team from "./Team";
import { cleanup, render, screen } from "@testing-library/react";
import { renderWithReduxAndRouter } from "../../utils/testUtils";
import  axiosMock  from "axios";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

jest.mock("axios");

describe("Team test", () => {
  const member = {
    id: "1",
    firstname: "Abhishek",
    lastname: "Rajgaria",
    role: "ASDE1",
    primaryStack: "React",
  };

  const members = [member, member];
  const mockStore = configureStore();
  afterEach(cleanup);
  test("shuold render team component", () => {
    axiosMock.get.mockResolvedValueOnce({
      data: { team: members, message: null },
    });
    const { container } = renderWithReduxAndRouter(<Team />);
    expect(container).not.toBeNull();
  });

  test("should render team component and have list", () => {
    const initialState = {
      teamReducer: { team: members, message: null },
    };
    let store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Team />
        </BrowserRouter>
      </Provider>
    );
    const teamListElement = screen.getByText("Team List");
    expect(teamListElement).toBeInTheDocument();
  });
});
