import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ArticleList from "./screens/article-list-screen";
import ArticleScreens from "./screens/article-detail-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: "red" } }}
    >
      <HomeStack.Screen
        name="homeScreens"
        component={ArticleList}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="articleScreens"
        component={ArticleScreens}
        options={{
          title: "Article",
        }}
      />
    </HomeStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ route }) => ({
          headerShown: getHeaderShown(route),
          headerStyle: { backgroundColor: "red" },
        })}
      >
        <Drawer.Screen
          name="home"
          component={HomeStackScreen}
          options={{ title: "Home Screen" }}
        />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

function getHeaderShown(route) {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName === "articleScreens") {
    return false;
  }
  return true;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
