import React from "react";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import store from "../store";

const customRender = (
  ui,
  initialStore = {},
  {
    route = "/",
    path = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
  options = {}
) => {
  const Wrapper = ({ children }) => (
    <Router history={history}>
      <Route
        path={path}
        render={() => <Provider store={store}>{children}</Provider>}
      />
    </Router>
  );

  const wrapper = render(ui, { wrapper: Wrapper, ...options });
  return { store, wrapper };
};

export default customRender;
