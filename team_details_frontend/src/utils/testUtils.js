import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { combineReducer } from "../redux/reducers/rootReducer.js";

const store = createStore(combineReducer, applyMiddleware(thunk));

export const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

export const renderWithRedux = (component) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

export const renderWithReduxAndRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{component}</Router>
      </Provider>
    ),
    store,
  };
};
