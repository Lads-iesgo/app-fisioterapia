import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import BackPageNav from "../../components/backPageNav";
import InputScreen from "../../components/inputScreen";
import MyButton from "../../components/myButton";
import { StaticParamList, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Stack } from "@/src/routes/stack.routes";

type StackScreensParamList = StaticParamList<typeof Stack>;
type ProfileScreenNavigationProp = NativeStackNavigationProp<
  StackScreensParamList,
  "CardPaciente"
>;

export default function StudentRegister() {
  let navigation = useNavigation<ProfileScreenNavigationProp>();

  useEffect(() => {
    navigation.setOptions({
      animation: "slide_from_right",
    });
  }, [navigation]);

  return (
    <>
      <BackPageNav
        onPress={() => navigation.goBack()}
        title="Registrar Estudantes"
      />
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/Logo-IESGO.png")}
          style={styles.img}
        />
        <View style={[styles.boxRegister, styles.shadow]}>
          <View style={styles.boxChilds}>
            <Text style={styles.title}>Insira os dados do estudante</Text>
            <InputScreen pHolder="Nome completo" />
            <InputScreen pHolder="Número da matrícula" />
            <InputScreen pHolder="Semestre" emailOrNumber={false} />
            <InputScreen pHolder="E-mail do estudante" emailOrNumber={true} />
            <InputScreen pHolder="Senha" password={true} />
            <InputScreen pHolder="Confirmar senha" password={true} />
          </View>
        </View>
        <View style={styles.btn}>
          <MyButton texto="Cadastrar" />
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
  img: {
    alignSelf: "center",
    width: "40%",
    height: 80,
    resizeMode: "contain",
  },
  boxRegister: {
    alignSelf: "center",
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    borderRadius: 10,
    width: "85%",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 23,
    marginTop: 20,
    marginBottom: 7,
  },
  boxChilds: {
    alignItems: "center",
    gap: 7,
    marginBottom: 15,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.85,
    shadowRadius: 2,
    elevation: 5,
  },
  btn: {
    alignItems: "center",
    marginTop: 20,
  },
});
