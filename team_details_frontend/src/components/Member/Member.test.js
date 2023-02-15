import {
    cleanup,
    fireEvent,
    render,
    screen,
    waitFor
} from "@testing-library/react";
import axiosMock from "axios";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { renderWithReduxAndRouter } from "../../utils/testUtils";
import Member from "./Member";

jest.mock("axios");
describe("Member test", () => {
  const memberInstance = {
    id: "1",
    firstname: "Abhishek",
    lastname: "Rajgaria",
    role: "ASDE1",
    primaryStack: "React",
  };
  const mockStore = configureStore();
  afterEach(cleanup);

  test("should render the Member component with member Instance", () => {
    const initialState = {
      getMemberReducer: { member: memberInstance, message: null },
      deleteMemberReducer: { success: null, deleteMessage: null },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Member />
        </BrowserRouter>
      </Provider>
    );
    const nameElement = screen.getByText("Abhishek Rajgaria");
    expect(nameElement).toBeInTheDocument();
  });

  test("should render the Member component with Delete Message", () => {
    const initialState = {
      getMemberReducer: { member: memberInstance, message: null },
      deleteMemberReducer: { success: true, deleteMessage: null },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Member />
        </BrowserRouter>
      </Provider>
    );
    const nameElement = screen.getByText("Deleted", { exact: false });
    expect(nameElement).toBeInTheDocument;
  });

  test("should handle the delete button click", async () => {
    axiosMock.delete.mockResolvedValueOnce({
      data: { success: true },
    });
    axiosMock.get.mockResolvedValueOnce({
        data: memberInstance
    })
    renderWithReduxAndRouter(<Member/>)
    const deleteButtonElement = screen.getByText(/Delete/i);
    await waitFor(() => {
      fireEvent.click(deleteButtonElement);
    });
    await waitFor(() => {
      expect(
        screen.getByText(
          "Deleted Successfully, You will be redirected Teams List page."
        )
      ).toBeInTheDocument();
    });
  });
});
