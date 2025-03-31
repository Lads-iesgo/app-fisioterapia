import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";

interface MyGroupProps {
  children: React.ReactNode;
  
}

const ButtonMenuGroup = (props: MyGroupProps) => {
  return (
    <View style={styles.viewBotao}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  viewBotao: {

    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-between',
    gap:'10',
    padding: 3,
    margin: 10,
  }
});

export default ButtonMenuGroup;




