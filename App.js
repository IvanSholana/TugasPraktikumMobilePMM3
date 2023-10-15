import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ArticleList from "./screens/article-list-screen";
import ArticleScreens from "./screens/article-detail-screen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="homeScreens"
          component={ArticleList}
          initialRouteName={true}
        />
        <Stack.Screen name="articleScreens" component={ArticleScreens} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
