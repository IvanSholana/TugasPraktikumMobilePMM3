import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ArticleList from "./screens/article-list-screen";
import ArticleScreens from "./screens/article-detail-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import ChosenArticle from "./screens/chosen-article-screen";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "red" },
      }}
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

function CustomDrawerContent({ props }) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close Drawer"
        onPress={() => {
          props.navigation.closeDrawer();
        }}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent props={props} />}
        screenOptions={{
          headerStyle: { backgroundColor: "red" },
          initialRouteName: "HomeScreens",
        }}
      >
        <Drawer.Screen
          name="home"
          component={HomeStackScreen}
          options={({ route }) => ({
            headerShown: getHeaderShown(route),
            title: "Article List",
            headerRight: () => (
              <View style={styles.icon}>
                <AntDesign name="facebook-square" size={24} color="black" />
                <AntDesign name="twitter" size={24} color="black" />
                <AntDesign name="youtube" size={24} color="black" />
                <AntDesign name="search1" size={24} color="black" />
              </View>
            ),
          })}
        />
        <Drawer.Screen
          name="article"
          component={ChosenArticle}
          options={{ title: "Article" }}
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
  icon: {
    flexDirection: "row",
    width: 130,
    marginEnd: 20,
    justifyContent: "space-around",
  },
});
