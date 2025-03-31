import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";

interface MyButtonProps {
  texto: string;
  iconSrc: any;
  
}




const ButtonMenu = ( props: MyButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button]}>
      <Image
              source={props.iconSrc}
              style={styles.imagemBotao}
            />
      <Text style={styles.text}>{props.texto}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
     
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#ccc",  
    position: 'relative'
    
  },
  text: {
    top: 20,
    textAlign: "center",
    fontSize: 12,
    paddingHorizontal: 5
    
    
  },
  imagemBotao:{
    width: 40,
    height: 40,
    marginBottom: 5,
    position: 'absolute',
    top: 10,
    
  }
});

export default ButtonMenu;
