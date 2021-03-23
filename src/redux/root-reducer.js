import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

import userReducer from "./user/user.reducer";
import alertsReducer from "./alerts/alerts.reducer";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  alerts: alertsReducer,
});

export default persistReducer(persistConfig, rootReducer);
