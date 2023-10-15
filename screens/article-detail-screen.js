import { View, Text, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
export default function ArticleScreens() {
  const route = useRoute();
  const { data } = route.params;

  return (
    <ScrollView>
      <View>
        <Image source={{ uri: data.image }} style={style.image} />
        <View style={style.container}>
          <Text style={style.judul}>{data.title}</Text>
          <Text>{data.content}</Text>
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
