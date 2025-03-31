import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import InputScreen from "../components/inputScreen";
import MyButton from "../components/myButton";
import BackPageNav from "../components/backPageNav";

export default function PasswordRecovery() {
  return (
    <>
      <BackPageNav />
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/Logo-IESGO.png")}
          style={styles.img}
        />
        <Text style={styles.title}>Insira o e-mail cadastrado</Text>
        <View style={styles.login}>
          <InputScreen pHolder="E-mail" />
          <MyButton texto="Enviar código" />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.password}>Reenviar código em: 30s</Text>
        </View>
      </View>
    </>
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
    height: 80,
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
