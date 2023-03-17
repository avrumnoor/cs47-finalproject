// Code converted from tsx to js from: https://www.youtube.com/watch?v=x0E6Pb-T5dg&list=PLX6ZeEdLt8m00ktgYLQqQan-oF8ONHM7E&index=4&ab_channel=BetoMoedano
import { SET_WATCHLIST_DATA } from "../actions/watchlist";

const initialState = {
  watchlistData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_WATCHLIST_DATA:
      return {
        watchlistData: action.coinData,
      };
    default:
      return state;
  }
};
