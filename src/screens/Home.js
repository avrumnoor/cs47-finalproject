import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  RefreshControl,
  ScrollView,
  SafeAreaView,
  Image,
  LogBox,
} from "react-native";
import Colors from "../constants/Colors";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Image
          style={styles.image}
          source={{
            uri: "https://cryptobox.vercel.app/static/media/cryptobox_v3.aef9ca06.png",
          }}
        />
        <Text style={styles.title}>Welcome to Cryptobox!</Text>
        <Text style={styles.subtitle}>
          Start building your crypto portfolio
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  image: {
    height: 250,
    width: 150,
    marginTop: 40,
  },
  title: {
    fontWeight: "600",
    letterSpacing: 0.5,
    fontSize: 21,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 17,
    marginBottom: 24,
    color: Colors.subtitle,
  },
});

export default Home;
