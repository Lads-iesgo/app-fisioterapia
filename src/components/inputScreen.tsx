import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

interface InputProps {
  pHolder: string;
}

const InputScreen = (props: InputProps) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <TextInput style={styles.input} placeholder={props.pHolder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    height: 58,
    borderRadius: 10,
  },
  input: {
    height: 58,
    backgroundColor: "#fff",
    zIndex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.85,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default InputScreen;
