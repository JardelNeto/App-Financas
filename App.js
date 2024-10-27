import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler'

import Routes from "./src/routes";
import AuthProvider from "./src/contexts/auth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
