// Code converted from tsx to js from: https://www.youtube.com/watch?v=x0E6Pb-T5dg&list=PLX6ZeEdLt8m00ktgYLQqQan-oF8ONHM7E&index=4&ab_channel=BetoMoedano
import Coin from "../../models/Coin";
import cmpData from "../../data/CoinMarketCapData";

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

      dispatch({
        type: SET_WATCHLIST_DATA,
        coinData: coinData,
      });
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
