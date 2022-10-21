import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CartPage from "../pages/cartPage";
import DevicePage from "../pages/devicePage";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="CartPage">
      <Stack.Screen name="CartPage" component={CartPage} />
      <Stack.Screen name="DevicePage" component={DevicePage} />
    </Stack.Navigator>
  );
};

export default Router;
