import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import ButtonMenuGroup from "./ButtonGroupMenu";
import BackPageNav from "./backPageNav";

// import logo
import logoIesgo from "../../assets/images/Logo-IESGO.png";


interface MyGroupProps {
  nome?: string;
  navMenu?: React.ReactNode;
  children?: React.ReactNode;
  
}

export default function MenuHome (props: MyGroupProps) {
  return (
    <>
      <StatusBar style="light" />
        <View style={styles.container}>
          {props.navMenu || <BackPageNav />}          
        
          <View style={styles.viewTopo}>
            <Text style={styles.saudacao}>Olá, {props.nome || 'Visitante'}</Text>

            <Image style={styles.logoWhite}  source={logoIesgo} />

            <Text style={styles.tituloFisioterapia}>Fisioterapia</Text>
          </View>

          <View style={styles.viewBranco}>
            <Text style={styles.subtituloMenu}>O que você precisa hoje?</Text>

            <ButtonMenuGroup>
                {props.children}
            </ButtonMenuGroup>
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
    marginTop: '-20%',
  },


  logoWhite: {
    width: '70%',
    height: '20%',
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
