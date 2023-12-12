import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Product from "./pages/Product";
import CameraComponent from "./pages/Camera";

const AppStack = createStackNavigator();

export function Routes(){ 
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown:false,
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Camera" component={CameraComponent} />
        <AppStack.Screen name="Product" component={Product} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}