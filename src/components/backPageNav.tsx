import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";

interface BackPageNavProps {
  onPress: () => void;
  title?: string;
}

export default function BackPageNav(props: BackPageNavProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.imgBox}
        onPress={props.onPress}
      >
        <Image
          source={require("../../assets/images/icons8-back-96.png")}
          style={styles.img}
        />
      </TouchableOpacity>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "8%",
    backgroundColor: "#00005D",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  imgBox: {
    justifyContent: "center",
  },
  img: {
    resizeMode: "contain",
    width: 40,
    height: 40,
  },
  titleBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 30,
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 400,
    textAlign: "center",
  },
});
