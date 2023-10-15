import { View, Text, Pressable, Image, StyleSheet } from "react-native";

export default function ArticleCard({ data, choseArticle }) {
  return (
    <View style={styles.cardContainer}>
      <Pressable style={styles.pressableContainer} onPress={choseArticle}>
        <Image
          style={styles.imageContent}
          source={{
            uri: data.image,
          }}
        />
        <View style={styles.judulContainer}>
          <Text style={styles.judul}>{data.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    elevation: 3,
    shadowColor: "black",
    backgroundColor: "white",
    margin: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
  pressableContainer: {},
  imageContent: {
    height: 200,
  },
  judulContainer: {
    padding: 15,
  },
  judul: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
