import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ArticleCard from "../components/article-card";
import { ARTICLES } from "../data/articles";

export default function ArticleList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={ARTICLES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ArticleCard data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
