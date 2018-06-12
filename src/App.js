import React, { Component } from "react";
import { View } from "react-native";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import logger from "redux-logger";

import { Header } from "./components/common";
import LibraryList from "./components/LibraryList";

export default class App extends Component {
  render() {
    const middlewares = [];

    if (process.env.NODE_ENV === `development`) {
      const { logger } = require(`redux-logger`);

      middlewares.push(logger);
    }
    return (
      <Provider store={createStore(reducers, applyMiddleware(...middlewares))}>
        <View>
          <Header headerText="Libraries" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}
