import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screens/login";
import HomerScreen from "../screens/homer";
import AbasdoCaramba from "./BottomTabNavegation";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={AbasdoCaramba} />
    </Stack.Navigator>
  );
}

export default MyStack;