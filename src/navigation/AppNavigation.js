import { Image, StyleSheet, View, SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Actions from "../screens/Actions";
import Home from "../screens/Home";
import News from "../screens/News";
import Portfolio from "../screens/Portfolio";
import Prices from "../screens/Prices";
import Settings from "../screens/Settings";
import TabBar from "../components/TabBar";
const TabBarNavigator = createBottomTabNavigator();

const HomeStackNavigator = createStackNavigator();
const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name="HomeScreen" component={Home} />
      <HomeStackNavigator.Screen name="News" component={News} />
    </HomeStackNavigator.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <TabBarNavigator.Navigator tabBar={(props) => <TabBar {...props} />}>
      <TabBarNavigator.Screen name="Home" component={HomeNavigator} />
      <TabBarNavigator.Screen name="Crypto Portfolio" component={Portfolio} />
      <TabBarNavigator.Screen name="Actions" component={Actions} />
      <TabBarNavigator.Screen name="Prices" component={Prices} />
      <TabBarNavigator.Screen name="Settings" component={Settings} />
    </TabBarNavigator.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
