// Code converted from tsx to js from: https://www.youtube.com/watch?v=x0E6Pb-T5dg&list=PLX6ZeEdLt8m00ktgYLQqQan-oF8ONHM7E&index=4&ab_channel=BetoMoedano
import React, { useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import * as Haptics from "expo-haptics";

import WatchlistItem from "./WhatchlistItem";
import * as watchlistActions from "../store/actions/watchlist";
import Colors from "../constants/Colors";

const Whatchlist = ({ coinData }) => {
  const dispatch = useDispatch();

  const renderItem = useCallback(({ item, drag, isActive }) => {
    return (
      <WatchlistItem
        id={item.id}
        name={item.name}
        symbol={item.symbol}
        price={item.price}
        percentChange={item.percentChange}
        drag={drag}
        isActive={isActive}
      />
    );
  }, []);

  return (
    <View>
      <Text style={styles.watchlistText}>Watchlist</Text>
      <View style={styles.watchlistContainer}>
        <DraggableFlatList
          data={coinData}
          keyExtractor={(item) => item.id + ""}
          scrollEnabled={false}
          onDragBegin={() =>
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
          }
          onDragEnd={({ data }) =>
            dispatch(watchlistActions.updateCoinData(data))
          }
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  watchlistText: {
    fontSize: 21,
    fontWeight: "600",
    marginTop: 64,
    marginBottom: 10,
  },
  watchlistContainer: {
    width: "88%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.border,
    backgroundColor: "white",
  },
});

export default Whatchlist;
