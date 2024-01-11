import React, { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import MyStack from "./navigation/StackNavigator.js";

export default class App extends Component {
  render(){
    return(
      <NavigationContainer>
      <MyStack/>
      </NavigationContainer>
    )
  }
}