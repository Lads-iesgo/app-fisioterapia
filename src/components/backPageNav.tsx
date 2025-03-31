import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, Animated } from "react-native";

export default function BackPageNav() {
  const [position, setPosition] = useState(new Animated.Value(0));
  const [opacity, setOpacity] = useState(new Animated.Value(0));

  Animated.sequence([
    Animated.timing(position, {
      toValue: 55,
      duration: 900,
      useNativeDriver: false,
    }),
    Animated.timing(opacity, {
      toValue: 100,
      duration: 900,
      useNativeDriver: false,
    }),
  ]).start();

  return (
    <Animated.View style={[styles.container, { height: position }]}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.imgBox, { opacity: opacity }]}
      >
        <Image
          source={require("../../assets/images/icons8-back-96.png")}
          style={styles.img}
        />
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#00005D",
  },
  imgBox: {
    marginLeft: 20,
    justifyContent: "center",
    flex: 1,
  },
  img: {
    resizeMode: "contain",
    width: 40,
    height: 40,
  },
});
