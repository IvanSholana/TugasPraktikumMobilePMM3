import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ArticleList from "./screens/article-list-screen";
import ArticleScreens from "./screens/article-detail-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="homeScreens" component={ArticleList} />
      <HomeStack.Screen name="articleScreens" component={ArticleScreens} />
    </HomeStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="home" component={HomeStackScreen} />
      </Drawer.Navigator>
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
