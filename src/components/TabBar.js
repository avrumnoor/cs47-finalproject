import React from "react";
import {
  Animated,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  Text,
} from "react-native";
import * as Haptics from "expo-haptics";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";

const TabBar = ({ state, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const isActions = route.name === "Actions";
        const itemColor = focused ? Colors.cbBlue : Colors.subtitle;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPrevent: true,
          });
          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
          if (isActions) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }
        };
        let iconName;
        switch (route.name) {
          case "Home":
            iconName = "home";
            break;
          case "Portfolio":
            iconName = "pie-chart";
            break;
          case "Actions":
            iconName = "add-circle";
            break;
          case "Prices":
            iconName = "trending-up";
            break;
          default:
            iconName = "person";
            break;
        }
        const animatedValue = new Animated.Value(1);
        const onPressIn = () => {
          Animated.spring(animatedValue, {
            toValue: 0.9,
            useNativeDriver: true,
          }).start();
        };
        const onPressOut = () => {
          Animated.spring(animatedValue, {
            toValue: 1,
            useNativeDriver: true,
          }).start();
        };
        const animatedStyle = {
          transform: [{ scale: animatedValue }],
        };
        return (
          <Animated.View
            style={[
              styles.tabItem,
              animatedStyle,
              isActions ? { marginTop: 7 } : { marginTop: 10 },
            ]}
            key={route.name}>
            <TouchableOpacity
              onPress={onPress}
              onPressIn={onPressIn}
              onPressOut={onPressOut}>
              {isActions ? (
                <View style={styles.actionsButton}>
                  <Ionicons name="swap-horizontal" size={20} color="white" />
                </View>
              ) : (
                <View style={{ alignItems: "center" }}>
                  <Ionicons
                    name={iconName}
                    size={20}
                    color={itemColor}
                    style={{ marginBottom: 2 }}
                  />
                  <Text style={[{ color: itemColor }, styles.tabBarText]}>
                    {route.name}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    height: 85,
    borderColor: "white",
    borderTopColor: Colors.border,
    borderWidth: 1,
    justifyContent: "space-evenly",
  },
  tabItem: {
    width: 60,
  },
  tabBarText: {
    fontSize: 10,
    fontWeight: "700",
  },
  actionsButton: {
    width: 42,
    height: 60,
    backgroundColor: Colors.cbBlue,
    borderRadius: 21,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabBar;
