import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import BasketScreen from "./screens/BasketScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Restaurant"
              component={RestaurantScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              screenOptions={{ presentation: "modal" }}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="PreparingOrder"
              component={PreparingOrderScreen}
              screenOptions={{ presentation: "fullScreenModal" }}
              options={{ headerShown: false }}
            />
   <Stack.Screen
              name="Delivery"
              component={DeliveryScreen}
              screenOptions={{ presentation: "fullScreenModal" }}
              options={{ headerShown: false }}
            />





          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
