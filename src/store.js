import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import filePathsReducer from "./slice/filePathsSlice";

const rootReducer = combineReducers({
  filePaths: filePathsReducer,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    version: 1,
    storage,
  },
  rootReducer
);

export const mainStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(mainStore);

export default { mainStore, persistor };
