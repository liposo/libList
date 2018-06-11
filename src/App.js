import React, { Component } from "react";
import { View } from "react-native";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

import { Header } from "./components/common";
import LibraryList from "./components/LibraryList";

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Libraries" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}
