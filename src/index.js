import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Footer from "./components/footer";
import NoMatch from "./404";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { event, init } from "./gtag";
import store, { history } from "./store-index";

const target = document.getElementById("root");

init();
event("bootstrap");

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);

registerServiceWorker();
