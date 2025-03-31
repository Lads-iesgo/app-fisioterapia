import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import InputScreen from "../components/inputScreen";
import MyButton from "../components/myButton";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Logo-IESGO.png")}
        style={styles.img}
      />
      <Text style={styles.title}>Entrar em sua conta</Text>
      <View style={styles.login}>
        <InputScreen pHolder="Email" />
        <InputScreen pHolder="Senha" />
        <MyButton texto="Entrar" />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.password}>Esqueci minha senha</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
  login: {
    alignItems: "center",
    gap: 30,
  },
  img: {
    alignSelf: "center",
    width: "40%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 40,
  },
  title: {
    alignSelf: "flex-start",
    width: "85%",
    paddingLeft: 27,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  password: {
    fontSize: 13,
    fontWeight: "300",
    fontStyle: "italic",
    marginTop: 15,
  },
});
