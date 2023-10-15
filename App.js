import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ArticleList from "./screens/article-list-screen";
import ArticleScreens from "./screens/article-detail-screen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: "red" } }}
      >
        <Stack.Screen
          name="homeScreens"
          component={ArticleList}
          initialRouteName={true}
          options={{ title: "ARTICLE" }}
        />
        <Stack.Screen name="articleScreens" component={ArticleScreens} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
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
