import CardPaciente from "../../components/cardPaciente";
import { FlatList, SafeAreaView } from "react-native";
import BackPageNav from "@/src/components/backPageNav";
import { StaticParamList, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";

import { Stack } from "@/src/routes/stack.routes";

import { DadosPaciente } from "../../../src/interfaces/interfaces";
import Json from "../../../dados.json";

type StackScreensParamList = StaticParamList<typeof Stack>;
type ProfileScreenNavigationProp = NativeStackNavigationProp<
  StackScreensParamList,
  "CardPaciente"
>;

export default function Index() {
  const [data, setData] = useState<DadosPaciente[]>([]);
  const [color, setColor] = useState("#00005D");

  const Data = Json as DadosPaciente[];

  useEffect(() => {
    setData(Data);
  }, []);

  const renderItem = ({ item }: { item: DadosPaciente }) => {
    return (
      <CardPaciente
        nomeFisio={item.fisioterapeuta}
        data={item.dataConsulta}
        hora={item.horaConsulta}
      />
    );
  };

  let navigation = useNavigation<ProfileScreenNavigationProp>();

  useEffect(() => {
    navigation.setOptions({
      animation: "slide_from_right",
    });
  }, [navigation]);

  return (
    <>
      <BackPageNav
        onPress={() => navigation.goBack()}
        title="Meus Agendamentos"
      />
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList data={data} renderItem={renderItem} />
      </SafeAreaView>
    </>
  );
}
