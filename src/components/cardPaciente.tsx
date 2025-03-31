import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface cardPacienteProps {
  nomeFisio: string;
  data: string;
  hora: string;
  icone?: string;
  color?: string;
}

export default function CardPaciente(props: cardPacienteProps) {
  return (
    <View style={[styles.container, styles.shadow, { margin: 30 }]}>
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
        style={[
          styles.buttonCancel,
          { backgroundColor: props.color || "#D20000" },
        ]}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
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
