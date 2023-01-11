import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { RootStore } from "./store/store";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={RootStore}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
