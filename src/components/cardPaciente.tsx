import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface cardPacienteProps {
  nomeFisio: string;
  data: string;
  hora: string;
  icone?: string;
  color?: string;
}

export default function CardPaciente(props: cardPacienteProps) {
  const [color, setColor] = useState("#00005D");
  const [opacity, setOpacity] = useState(0);

  function changeColor(color: string, opacity: number) {
    if (color === "#D20000") {
      setColor("#00005D");
      setOpacity(0);
      return color;
    } else if (color === "#00005D") {
      setColor("#D20000");
      setOpacity(100);
      return color;
    }
    return color;
  }

  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.dataBox}>
        <Text style={styles.title}>Fisioterapeuta</Text>
        <Text>{props.nomeFisio}</Text>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={styles.title}>Data da consulta</Text>
            <Text>{props.data}</Text>
          </View>
          <View style={{ marginLeft: 30 }}>
            <Text style={styles.title}>Horário</Text>
            <Text>{props.hora}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.buttonCancel, { backgroundColor: color }]}
        onPress={() => changeColor(color, opacity)}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
            opacity: opacity,
          }}
          onPress={() => changeColor(color, opacity)}
        >
          X
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "85%",
    height: 120,
    borderRadius: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    marginVertical: 10,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.85,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonCancel: {
    width: "25%",
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  dataBox: {
    alignItems: "flex-start",
    justifyContent: "space-around",
    padding: 10,
  },
});
