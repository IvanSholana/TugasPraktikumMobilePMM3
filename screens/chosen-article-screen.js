import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ARTICLES } from "../data/articles";

export default function ChosenArticle() {
  return (
    <ScrollView>
      <View>
        <Image source={{ uri: ARTICLES[0].image }} style={style.image} />
        <View style={style.container}>
          <Text style={style.judul}>{ARTICLES[0].title}</Text>
          <Text>{ARTICLES[0].content}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: { padding: 15 },
  image: { width: "100%", height: 200 },
  judul: {
    textAlign: "center",
    marginBottom: 20,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
});
