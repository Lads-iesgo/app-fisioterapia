import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import ButtonMenuGroup from "../../components/groupButtonMenu";
import BackPageNav from "../../components/backPageNav";
import { StaticParamList, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Stack } from "@/src/routes/stack.routes";

interface MyGroupProps {
  nome?: string;
  navMenu?: React.ReactNode;
  children?: React.ReactNode;
}

type StackScreensParamList = StaticParamList<typeof Stack>;
type ProfileScreenNavigationProp = NativeStackNavigationProp<
  StackScreensParamList,
  "PasswordRecovery"
>;

export default function HomeMenu(props: MyGroupProps) {
  let navigation = useNavigation<ProfileScreenNavigationProp>();

  useEffect(() => {
    navigation.setOptions({
      animation: "default",
    });
  }, [navigation]);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        {props.navMenu || <BackPageNav onPress={() => navigation.goBack()} />}

        <View style={styles.viewTopo}>
          <Text style={styles.saudacao}>Olá, {props.nome || "Visitante"}</Text>

          <Image
            style={styles.logoWhite}
            source={require("../../../assets/images/Logo-IESGO.png")}
          />

          <Text style={styles.tituloFisioterapia}>Fisioterapia</Text>
        </View>

        <View style={styles.viewBranco}>
          <Text style={styles.subtituloMenu}>O que você precisa hoje?</Text>

          <ButtonMenuGroup>{props.children}</ButtonMenuGroup>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00005D",
    paddingTop: 30,
  },

  viewTopo: {
    height: "45%",
    justifyContent: "center",
    alignItems: "center",
  },

  saudacao: {
    position: "absolute",
    fontSize: 20,
    color: "#FFFFFF",
    left: 30,
    top: 40,
  },

  subtituloMenu: {
    fontSize: 20,
    color: "#000000",
    paddingTop: 15,
    paddingBottom: 5,
  },

  viewBranco: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: "-20%",
  },

  logoWhite: {
    width: "70%",
    height: "20%",
    tintColor: "#FFFFFF",
    marginTop: 20,
  },

  tituloFisioterapia: {
    fontSize: 36,
    color: "#FFFFFF",
    textAlign: "center",
    paddingTop: 20,
  },
});
