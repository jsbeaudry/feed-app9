import React from "react";
import { View, Text, Platform } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import App9 from "./app6/feed4";

import { Ionicons } from "@expo/vector-icons";

const A9 = createStackNavigator({
  home: {
    screen: App9,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  }
});

export default createAppContainer(A9);
