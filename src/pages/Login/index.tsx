import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { StaticParamList, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Stack } from "@/src/routes/stack.routes";

import InputScreen from "../../components/inputScreen";
import MyButton from "../../components/myButton";

type StackScreensParamList = StaticParamList<typeof Stack>;
type ProfileScreenNavigationProp = NativeStackNavigationProp<
  StackScreensParamList,
  "Login"
>;

export default function Login() {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/Logo-IESGO.png")}
        style={styles.img}
      />
      <Text style={styles.title}>Entrar em sua conta</Text>
      <View style={styles.login}>
        <InputScreen pHolder="Email" emailOrNumber={true} />
        <InputScreen pHolder="Senha" password={true} />
        <MyButton
          texto="Entrar"
          onPress={() => navigation.navigate("HomeMenu")}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={[
            styles.password,
            {
              fontSize: 15,
              fontStyle: "normal",
              fontWeight: "400",
              marginTop: 20,
            },
          ]}
          onPress={() => navigation.navigate("StudentRegister")}
        >
          Registrar estudante
        </Text>
        <Text
          style={styles.password}
          onPress={() => navigation.navigate("PasswordRecovery")}
        >
          Esqueci minha senha
        </Text>
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
