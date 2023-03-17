import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  RefreshControl,
  ScrollView,
  SafeAreaView,
  Image,
  LogBox,
  Button,
  Pressable,
} from "react-native";
import Colors from "../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import Watchlist from "../components/Whatchlist";
import * as watchlistActions from "../store/actions/watchlist";

const Home = () => {
  const watchlistData = useSelector((state) => state.watchlist.watchlistData);
  const dispatch = useDispatch();

  const loadData = () => {
    try {
      dispatch(watchlistActions.fetchCoinData());
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  console.log(watchlistData)
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
        <Text style={styles.subtitle}>Join the Hype!</Text>
        <Pressable style={styles.button}>
          <Text style={styles.subtitle}>Get Started</Text>
        </Pressable>
        {/* <Button title="Get Started" onPress={() => console.log("Hi")} /> */}
        <Watchlist coinData={watchlistData} />
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
  button: {
    backgroundColor: Colors.cbBlue,
    borderRadius: 5,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
});

export default Home;
