import React, { useState, useEffect } from "react";
import { Appearance, Platform } from "react-native";
import NewsFeedScreen from "./screens/NewsFeedScreen";
import NewsDetailScreen from "./screens/NewsDetailScreen";


import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionSpecs,
} from "@react-navigation/stack";

// Pantallas existentes
import UserLoginScreen from "./screens/UserLoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

// Nuevas pantallas de miembros
import MemberLoginScreen from "./screens/MemberLoginScreen";
import MemberRegisterScreen from "./screens/MemberRegisterScreen";

// Pantallas nuevas del sistema de noticias
import CreateNewsScreen from "./screens/CreateNewsScreen";
import CameraScreen from "./screens/CameraScreen";

const Stack = createStackNavigator();

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    setIsDark(hour >= 19 || hour < 6);

    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDark(colorScheme === "dark");
    });

    return () => subscription.remove();
  }, []);

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
          },
          animationEnabled: true,
          presentation: Platform.OS === "ios" ? "card" : "transparentModal",
        }}
      >
        {/* Login normal */}
        <Stack.Screen name="Login">
          {(props) => <UserLoginScreen {...props} isDark={isDark} />}
        </Stack.Screen>

        {/* Registro normal */}
        <Stack.Screen name="Register">
          {(props) => <RegisterScreen {...props} isDark={isDark} />}
        </Stack.Screen>

        {/* Login miembro */}
        <Stack.Screen name="MemberLogin">
          {(props) => <MemberLoginScreen {...props} isDark={isDark} />}
        </Stack.Screen>

        {/* Registro miembro */}
        <Stack.Screen name="MemberRegister">
          {(props) => <MemberRegisterScreen {...props} isDark={isDark} />}
        </Stack.Screen>

        {/* Nueva pantalla: Crear noticia */}
        <Stack.Screen name="CreateNews">
          {(props) => <CreateNewsScreen {...props} isDark={isDark} />}
        </Stack.Screen>

        
        
        <Stack.Screen
          name="NewsFeed"
          component={NewsFeedScreen}
          options={{ headerShown: false }}
        />


        {/* Nueva pantalla: Cámara */}
        <Stack.Screen name="Camera">
          {(props) => <CameraScreen {...props} isDark={isDark} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
