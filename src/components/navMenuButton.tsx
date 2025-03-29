import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface navButtonProps {
  texto: string;
  cor?: string;
}

export default function NavMenuButton(props: navButtonProps) {
  return (
    <TouchableOpacity  style={[styles.button, { backgroundColor: props.cor || "#00005D" }]}>
      <Text style={styles.text}>{props.texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "85%",
    height: 46,
    paddingTop: 10,
    paddingLeft: 20,
    borderRadius: 10,
    justifyContent: "flex-start",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Inter",
  },
});