import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screens/login";
import HomerScreen from "../screens/homer";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomerScreen} />
    </Stack.Navigator>
  );
}