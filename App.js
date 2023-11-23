import React, { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from "./screens/login.js";

export default class App extends Component {
  render(){
    return(
      <LoginScreen/>
    )
  }
}