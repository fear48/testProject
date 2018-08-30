import React, { Component } from "react";
import { Platform, AppRegistry, Alert } from "react-native";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Navigation } from "react-native-navigation";
import * as reducers from "./reducers/index";
import * as appActions from "./actions/index";
import thunk from "redux-thunk";
import registerScreens from "./components/screens/screens.js";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
registerScreens(store, Provider);

export default class App extends Component {
  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
    this.startApp();
  }

  onStoreUpdate() {
    // handle store updates
  }

  startApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: "Users",
          screen: "ReactNativeReduxExample.Hometab",
          icon: require("./img/checkmark.png"),
          selectedIcon: require("./img/checkmark.png"),
          title: "List of users",
          overrideBackPress: false,
          navigatorStyle: {}
        }
      ]
    });
  }
}
