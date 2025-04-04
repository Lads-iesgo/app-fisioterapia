import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login";
import PasswordRecovery from "../pages/PasswordRecovery";
import StudentRegister from "../pages/StudentRegister";
import CardPaciente from "../pages/CardPaciente";
import {
  NavigatorScreenParams,
  StaticScreenProps,
} from "@react-navigation/native";
import HomeMenu from "../pages/Home";

export const Stack = createNativeStackNavigator();

type StackScreensParamList = {
  Login: undefined;
  PasswordRecovery: undefined;
  StudentRegister: undefined;
  CardPaciente: undefined;
  HomeMenu: undefined;
};

type StackScreensProps = StaticScreenProps<
  NavigatorScreenParams<StackScreensParamList>
>;

export default function StackRoutes(_: StackScreensProps) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        animationDuration: 2000,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="PasswordRecovery"
        component={PasswordRecovery}
        options={{ animation: "slide_from_left" }}
      />
      <Stack.Screen name="StudentRegister" component={StudentRegister} />
      <Stack.Screen
        name="CardPaciente"
        component={CardPaciente}
        options={{ animation: "slide_from_bottom" }}
      />
      <Stack.Screen
        name="HomeMenu"
        component={HomeMenu}
        options={{ animation: "slide_from_left" }}
      />
    </Stack.Navigator>
  );
}
