import React from "react";

import { Provider } from "react-redux";
import BootstrapProvider from "@bootstrap-styled/provider/lib/BootstrapProvider";
import { createGlobalStyle } from "styled-components";

import ReactDOM from "react-dom";
import Custom from "./views/Custom";

import { store } from "./redux/configureStore";

import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
  }
  * {
    box-sizing: border-box;
  }
  *:before, *:after {
    box-sizing: inherit;
  }
`;

const render = () => {
  ReactDOM.render(
    <BootstrapProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <Custom />
      </Provider>
    </BootstrapProvider>,
    document.getElementById("root")
  );
};

render();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept("./views/Custom", () => {
    render();
  });
}
