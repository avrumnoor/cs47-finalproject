import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Coin from "../../models/Coin";
import cmpData from "../../data/CoinMarketCapData";
import { WatchlistState } from "../reducers/watchlist";

export const SET_WATCHLIST_DATA = "SET_WATCHLIST_DATA";

export const fetchCoinData = () => {
  return async (dispatch) => {
    const coins = ["BTC", "ETH", "XRP", "DOGE", "SHIB", "MANA"];

    try {
      const cryptoResponse = await fetch(
       `https://min-api.cryptocompare.com/data/pricemultifull?tsyms=USD&relaxedValidation=true&fsyms=${coins.join()}`
      );
      const cryptoResponseData = await cryptoResponse.json();
      console.log(cryptoResponseData)
      const coinData = [];

      coins.forEach((coin) => {
        const coinDetails = cryptoResponseData.RAW[coin].USD;
        const cmpDetails = cmpData.data.find(
          (cmp) => coinDetails.FROMSYMBOL === cmp.symbol
        );
        const coinID = cmpDetails?.id ?? 0;
        const coinName = cmpDetails?.name ?? "N/A";

        coinData.push(
          new Coin(
            coinID,
            coinName,
            coin,
            coinDetails.PRICE,
            coinDetails.CHANGEPCT24HOUR
          )
        );
      });

    //   dispatch(undefined, {
    //     type: SET_WATCHLIST_DATA,
    //     coinData: coinData,
    //   });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateCoinData = (newData) => {
  return async (dispatch) => {
    dispatch({
      type: SET_WATCHLIST_DATA,
      coinData: newData,
    });
  };
};
