
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
export default function App() {
  
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}  />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
