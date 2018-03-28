import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Footer from "./components/footer";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { init, event } from "./gtag"
import store, { history } from "./store-index";

const target = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Footer />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);

init();
event("bootstrap");

registerServiceWorker();
