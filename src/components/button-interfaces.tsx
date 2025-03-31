import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface MyButtonProps {
  texto: string;
  cor: string;
}

const MyButton= ( props: MyButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: props.cor || 'blue'}]}>
      <Text style={styles.text}>{props.texto}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {    
    width: '80%',
    height: 58,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',   
    
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: 'Inter', 
    
    
  },
});

export default MyButton;
