import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface MyButtonProps {
  texto: string;
  cor?: string;
  onPress?: () => void;
}

export default function MyButton(props: MyButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.button, { backgroundColor: props.cor || "#00005D" }]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "85%",
    height: 58,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Inter",
  },
});
