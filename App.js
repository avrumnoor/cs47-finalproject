import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import watchlistReducer from "./src/store/reducers/watchlist";
import AppNavigator from "./src/navigation/AppNavigation";

const rootReducer = combineReducers({
  watchlist: watchlistReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
